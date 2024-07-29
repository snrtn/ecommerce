import * as authService from '../services/authService.js';

export const addUserController = (req, res) => {
	const { googleId, displayName, email, grade } = req.body;
	authService.saveOrUpdateUser(googleId, displayName, email, grade, (err, result) => {
		if (err) {
			return res.status(500).json({ error: 'Failed to add user' });
		}
		res.status(200).json({ message: 'User added successfully', result });
	});
};

export const getUserController = (req, res) => {
	const { id } = req.params;
	authService.getUserData(id, (err, user) => {
		if (err) {
			return res.status(500).json({ error: 'Failed to get user' });
		}
		res.status(200).json(user);
	});
};

export const updateUserController = (req, res) => {
	const { id } = req.params;
	const { displayName, email, grade } = req.body;
	authService.updateUser(id, displayName, email, grade, (err) => {
		if (err) {
			return res.status(500).json({ error: 'Failed to update user' });
		}
		res.status(200).json({ message: 'User updated successfully' });
	});
};

export const deleteUserController = (req, res) => {
	const { id } = req.params;
	authService.deleteUser(id, (err) => {
		if (err) {
			return res.status(500).json({ error: 'Failed to delete user' });
		}
		res.status(200).json({ message: 'User deleted successfully' });
	});
};
