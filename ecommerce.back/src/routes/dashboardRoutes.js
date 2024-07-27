import express from 'express';

const router = express.Router();

router.get('/dashboard', (req, res) => {
	res.send('Welcome to your dashboard!');
});

export default router;
