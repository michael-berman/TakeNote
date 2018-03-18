import DB from './db_config';
import bcrypt from 'bcrypt-nodejs';

const Schema = DB.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  created_at: {
    type: Date
  },
  updated_at: {
    type: Date
  }
});

const User = DB.model('User', userSchema);

export default User;
