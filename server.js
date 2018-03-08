const path = require('path');
const fs = require('fs');
const express = require('express');
const http = require('http');

const app = express();

require('dotenv').config({ path: './variables.env' });

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './client', 'index.html'));
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
