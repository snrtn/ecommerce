import mongoClient from '../../config/mongo.js';

const db = mongoClient.db(process.env.MONGO_DB_NAME);
const usersCollection = db.collection('users');

export const saveOrUpdateUser = async (googleId, displayName, email, grade) => {
	const update = {
		$set: {
			google_id: googleId,
			name: displayName,
			email: email,
			grade: grade,
		},
		$setOnInsert: {
			shipping_status: [],
			shopping_cart: [],
			recently_viewed: [],
			wishlist: [],
			coupons: [],
			gallery: [],
			consulting: [],
			notifications: [],
		},
	};
	const options = { upsert: true };
	await usersCollection.updateOne({ google_id: googleId }, update, options);
};
