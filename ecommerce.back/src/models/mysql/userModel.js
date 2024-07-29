import db from '../../config/mysql.js';

export const saveOrUpdateUser = (googleId, displayName, email, grade, callback) => {
	const query = `
        INSERT INTO users (google_id, name, email, grade)
        VALUES (?, ?, ?, ?)
        ON DUPLICATE KEY UPDATE name = VALUES(name), email = VALUES(email), grade = VALUES(grade)
    `;
	db.query(query, [googleId, displayName, email, grade], callback);
};

export const getUser = (googleId, callback) => {
	const query = `SELECT * FROM users WHERE google_id = ?`;
	db.query(query, [googleId], (err, results) => {
		if (err) return callback(err);
		callback(null, results[0]);
	});
};

export const updateUser = (googleId, displayName, email, grade, callback) => {
	const query = `UPDATE users SET name = ?, email = ?, grade = ? WHERE google_id = ?`;
	db.query(query, [displayName, email, grade, googleId], callback);
};

export const deleteUser = (googleId, callback) => {
	const query = `DELETE FROM users WHERE google_id = ?`;
	db.query(query, [googleId], callback);
};
