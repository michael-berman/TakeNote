import mongoose from 'mongoose';

require('dotenv').config({
  path: './variables.env'
});

mongoose.connect = (process.env.DATABASE);

const Schema = mongoose.Schema;

export default Schema;
