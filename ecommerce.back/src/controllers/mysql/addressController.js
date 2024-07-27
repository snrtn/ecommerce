import * as addressService from '../../services/mysql/addressService.js';

export const addAddressController = (req, res) => {
	const { userId, address } = req.body;
	addressService.addAddress(userId, address, (err, result) => {
		if (err) {
			return res.status(500).json({ error: 'Failed to add address' });
		}
		res.status(200).json({ message: 'Address added successfully', result });
	});
};
