import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import session from 'express-session';
import passport from 'passport';
import authRoutes from './routes/authRoutes.js';

const app = express();

app.use(express.json());

app.use(
	session({
		secret: 'SECRET',
		resave: false,
		saveUninitialized: true,
	}),
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/', authRoutes);

app.get('/', (req, res) => {
	res.send('Hello, World!');
});

app.get('/dashboard', (req, res) => {
	if (req.isAuthenticated()) {
		res.send(`Hello ${req.user.displayName}`);
	} else {
		res.redirect('/');
	}
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
