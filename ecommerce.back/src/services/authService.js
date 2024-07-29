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
	saveOrUpdateUserMysql(googleId, displayName, email, grade, (mysqlErr) => {
		if (mysqlErr) return callback(mysqlErr);
		saveOrUpdateUserMongo(googleId, displayName, email, grade)
			.then(() => callback(null))
			.catch(callback);
	});
};

export const getUserData = (googleId, callback) => {
	getUserMysql(googleId, (mysqlErr, mysqlUser) => {
		if (mysqlErr) return callback(mysqlErr);
		if (!mysqlUser) return callback(null, null);
		getUserMongo(googleId)
			.then((mongoUser) => {
				const userData = {
					...mysqlUser,
					mongoData: mongoUser || {},
				};
				callback(null, userData);
			})
			.catch(callback);
	});
};

export const updateUser = (googleId, displayName, email, grade, callback) => {
	updateUserMysql(googleId, displayName, email, grade, (mysqlErr) => {
		if (mysqlErr) return callback(mysqlErr);
		updateUserMongo(googleId, displayName, email, grade)
			.then(() => callback(null))
			.catch(callback);
	});
};

export const deleteUser = (googleId, callback) => {
	deleteUserMysql(googleId, (mysqlErr) => {
		if (mysqlErr) return callback(mysqlErr);
		deleteUserMongo(googleId)
			.then(() => callback(null))
			.catch(callback);
	});
};
