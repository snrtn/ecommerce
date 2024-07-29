import express from 'express';
import {
	addUserController,
	getUserController,
	updateUserController,
	deleteUserController,
} from '../controllers/userController.js';

const router = express.Router();

router.post('/user', addUserController);
router.get('/user/:id', getUserController);
router.put('/user/:id', updateUserController);
router.delete('/user/:id', deleteUserController);

export default router;
