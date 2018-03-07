import mongoose from 'mongoose';

const Schema = mongoose.Schema;

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

export default mongoose.model('User', userSchema);
