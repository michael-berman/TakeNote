import path from 'path';
import fs from 'fs';
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.sendFile('../client/index.html');
});

module.exports = app;
