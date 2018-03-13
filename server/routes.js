import express from 'express';
import sessionController from './controllers/sessionController';
import usersController from './controllers/usersController';

const router = express.router;

// session routes
router.post('api/session', sessionController.loginUser);

// user routes
router.get('api/users', usersController.getUsers);
router.post('api/users', usersController.createUser);

module.exports = router;
