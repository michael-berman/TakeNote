import express from 'express';
import usersController from './controllers/usersController';
import authController from './controllers/authController';

const router = express.Router();

// google routes
router.get('/auth/google', authController.getGoogleAuth);
router.get('/auth/google/callback', authController.getGoogleCallback);
router.get('/logout', authController.logout);

// user routes
router.get('/users', usersController.getUsers);


module.exports = router;
