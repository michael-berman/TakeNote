import path from 'path';
import fs from 'fs';
import express from 'express';
import http from 'http';
import routes from './routes';
import bodyParser from 'body-parser';
import passport from 'passport';
import session from 'express-session';

const app = express();

require('dotenv').config({
  path: './variables.env'
});

app.use(express.static(path.join(__dirname, '../client/stylesheets')));
app.use(express.static(path.join(__dirname, '../client/')));
app.use(session({ secret: "dogs" }));

app.use(passport.initialize());
app.use(passport.session());


app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client', 'index.html'));
});

app.use('/api', routes);

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
