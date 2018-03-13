import express from 'express';
import sessionController from './controllers/sessionController';
import usersController from './controllers/usersController';

const router = express.router;

// session routes
router.post('/session', sessionController.loginUser);

// user routes
router.get('/users', usersController.getUsers);
router.post('/users', usersController.createUser);

module.exports = router;
