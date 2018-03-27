import DB from '../config/db_config';
import bcrypt from 'bcrypt-nodejs';

const Schema = DB.Schema;

const userSchema = new Schema({
  local: {
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
  },
  google : {
    id : String,
    token : String,
    email : String,
    name : String
  }
});

userSchema.methods.generateHash = (password) => {
  console.log(password);
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = (password) => {
  return bcrypt.compareSync(password, this.local.password);
};

const User = DB.model('User', userSchema);

export default User;
