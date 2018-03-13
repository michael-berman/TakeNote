import path from 'path';
import fs from 'fs';
import express from 'express';
import http from 'http';

const app = express();

require('dotenv').config({
  path: './variables.env'
});

app.use(express.static(path.join(__dirname, '../client/stylesheets')));
app.use(express.static(path.join(__dirname, '../client/')));

// TODO: import session routes from router

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client', 'index.html'));
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
