import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import dotenv from 'dotenv';
import { saveOrUpdateUser as saveOrUpdateUserMySQL } from '../models/mysql/userModel.js';
import { saveOrUpdateUser as saveOrUpdateUserMongo } from '../models/mongo/userModel.js';

dotenv.config();

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			callbackURL: 'http://localhost:3000/auth/google/callback',
		},
		async function (accessToken, refreshToken, profile, done) {
			try {
				const { id: googleId, displayName, emails } = profile;
				const email = emails[0].value;
				const grade = 'user';

				saveOrUpdateUserMySQL(googleId, displayName, email, grade, (err) => {
					if (err) return done(err);
				});

				await saveOrUpdateUserMongo(googleId, displayName, email, grade);

				return done(null, profile);
			} catch (err) {
				return done(err);
			}
		},
	),
);

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});

export const googleAuth = passport.authenticate('google', { scope: ['profile', 'email'] });

export const googleAuthCallback = passport.authenticate('google', { failureRedirect: '/' });

export const authSuccess = (req, res) => {
	res.redirect('/dashboard');
};

export const authFailure = (req, res) => {
	res.redirect('/login');
};

export const logout = (req, res) => {
	req.logout(() => {
		res.redirect('/');
	});
};
