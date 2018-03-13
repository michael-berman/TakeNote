import express from 'express';
import sessionController from './controllers/sessionController';

const router = express.router;

router.post('/login', sessionController.loginUser);

router.post('/signup', sessionController.signupUser);

// TODO: add in method override for delete (logout)

module.exports = router;
