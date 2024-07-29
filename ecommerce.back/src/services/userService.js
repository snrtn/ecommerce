import {
	saveOrUpdateUser as saveOrUpdateUserMysql,
	getUser as getUserMysql,
	updateUser as updateUserMysql,
	deleteUser as deleteUserMysql,
} from '../models/mysql/userModel.js';
import {
	saveOrUpdateUser as saveOrUpdateUserMongo,
	getUser as getUserMongo,
	updateUser as updateUserMongo,
	deleteUser as deleteUserMongo,
} from '../models/mongo/userModel.js';

export const saveOrUpdateUser = (googleId, displayName, email, grade, callback) => {
	saveOrUpdateUserMysql(googleId, displayName, email, grade, (mysqlError) => {
		if (mysqlError) return callback(mysqlError);

		saveOrUpdateUserMongo(googleId, displayName, email, grade, (mongoError) => {
			if (mongoError) return callback(mongoError);

			callback(null);
		});
	});
};

export const getUser = (googleId, callback) => {
	getUserMysql(googleId, (mysqlError, mysqlResults) => {
		if (mysqlError) return callback(mysqlError);

		getUserMongo({ google_id: googleId }, (mongoError, mongoResults) => {
			if (mongoError) return callback(mongoError);

			callback(null, { mysql: mysqlResults, mongo: mongoResults });
		});
	});
};

export const updateUser = (googleId, name, email, grade, callback) => {
	updateUserMysql(googleId, name, email, grade, (mysqlError) => {
		if (mysqlError) return callback(mysqlError);

		updateUserMongo({ google_id: googleId }, { $set: { name, email, grade } }, (mongoError) => {
			if (mongoError) return callback(mongoError);

			callback(null);
		});
	});
};

export const deleteUser = (googleId, callback) => {
	deleteUserMysql(googleId, (mysqlError) => {
		if (mysqlError) return callback(mysqlError);

		deleteUserMongo({ google_id: googleId }, (mongoError) => {
			if (mongoError) return callback(mongoError);

			callback(null);
		});
	});
};
