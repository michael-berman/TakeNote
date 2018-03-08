// const express = require('express');
// const usersController = require('./controllers/usersController');
import express from 'express';
import usersController from './controllers/usersController';

const router = express.router;

router.get('/users', usersController.getUsers);

router.post('/users', usersController.createUser);

module.exports = router;
