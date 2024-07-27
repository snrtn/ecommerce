import db from '../../config/mysql.js';

export const addAddress = (userId, address, callback) => {
	const query = `INSERT INTO addresses (user_id, address_line1, address_line2, city, state, zip, country) VALUES (?, ?, ?, ?, ?, ?, ?)`;
	db.query(
		query,
		[userId, address.address_line1, address.address_line2, address.city, address.state, address.zip, address.country],
		(err, result) => {
			if (err) {
				console.error('Error executing query:', err.message);
				callback(err);
			} else {
				callback(null, result);
			}
		},
	);
};
