import express from 'express';
import sessionController from './controllers/sessionController';
import usersController from './controllers/usersController';
import passport from 'passport';

const router = express.Router();

// session routes
router.post('/session', sessionController.loginUser);

// user routes
router.get('/users', usersController.getUsers);
router.post('/users', usersController.createUser);

// google routes
router.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

router.get('/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: '/profile',
    failureRedirect: '/'
  })
);

module.exports = router;
