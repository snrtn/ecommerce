import * as addressModel from '../../models/mysql/addressModel.js';

export const addAddress = (userId, address, callback) => {
	addressModel.addAddress(userId, address, callback);
};
