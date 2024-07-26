import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

console.log('MONGO_URI:', process.env.MONGO_URI);

const client = new MongoClient(process.env.MONGO_URI);

client.connect((err) => {
	if (err) {
		console.error('Error connecting to MongoDB: ' + err.stack);
		return;
	}
	console.log('Connected to MongoDB');
});

export default client;
