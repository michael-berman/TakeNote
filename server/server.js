import path from 'path';
import fs from 'fs';
import express from 'express';
import http from 'http';
import routes from './routes';

const app = express();

require('dotenv').config({
  path: './variables.env'
});

app.use(express.static(path.join(__dirname, '../client/stylesheets')));
app.use(express.static(path.join(__dirname, '../client/')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client', 'index.html'));
});

app.use('/api', routes);

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
