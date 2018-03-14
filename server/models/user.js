import mongoose from 'mongoose';
import Schema from './db_config';

const userSchema = new Schema({
  email: {
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

// TODO: Need to add validations from passport into mongoose
// TODO: Need to add session tokens as well

export default mongoose.model('User', userSchema);
