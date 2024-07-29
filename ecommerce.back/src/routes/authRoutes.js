import express from 'express';
import { googleAuth, googleAuthCallback, authSuccess, authFailure, logout } from '../controllers/authController.js';

const router = express.Router();

router.get('/auth/google', googleAuth);
router.get('/auth/google/callback', googleAuthCallback, authSuccess);
router.get('/logout', logout);

export default router;
