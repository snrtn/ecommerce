import dotenv from 'dotenv';
import express from 'express';
import session from 'express-session';
import passport from 'passport';
import authRoutes from './routes/authRoutes.js';
import addressRoutes from './routes/mysql/addressRoutes.js';

dotenv.config();

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
app.use('/api', addressRoutes);

app.get('/', (req, res) => {
	res.send('Hello, World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
