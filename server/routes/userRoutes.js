const express = require('express');
const router = express.router;
const usersController = require('./controllers/usersController');

router.get('/users', usersController.getUsers);

router.post('/users', usersController.createUser);

module.exports = router;
