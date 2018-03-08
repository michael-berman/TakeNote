import path from 'path';
import fs from 'fs';
import express from 'express';
import { port } from './env';
const app = express();

app.get('/', (req, res) => {
  res.sendFile('../client/index.html');
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
