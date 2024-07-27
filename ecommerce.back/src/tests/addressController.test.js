import request from 'supertest';
import express from 'express';
import * as addressService from '../services/mysql/addressService.js';
import { addAddressController } from '../controllers/mysql/addressController.js';

jest.mock('mysql2', () => ({
	createConnection: jest.fn(() => ({
		connect: jest.fn((callback) => callback(null)),
		query: jest.fn(),
		end: jest.fn(),
	})),
}));

jest.mock('../services/mysql/addressService.js');

const app = express();
app.use(express.json());
app.post('/addAddress', addAddressController);

describe('addAddressController', () => {
	it('should add address successfully', async () => {
		addressService.addAddress.mockImplementation((userId, address, callback) => {
			callback(null, { id: 1, userId, address });
		});

		const response = await request(app).post('/addAddress').send({ userId: 1, address: '123 Test St' });

		expect(response.status).toBe(200);
		expect(response.body).toEqual({
			message: 'Address added successfully',
			result: { id: 1, userId: 1, address: '123 Test St' },
		});
	});

	it('should return error if addressService fails', async () => {
		addressService.addAddress.mockImplementation((userId, address, callback) => {
			callback(new Error('Failed to add address'), null);
		});

		const response = await request(app).post('/addAddress').send({ userId: 1, address: '123 Test St' });

		expect(response.status).toBe(500);
		expect(response.body).toEqual({ error: 'Failed to add address' });
	});
});
