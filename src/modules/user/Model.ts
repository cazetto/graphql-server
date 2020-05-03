import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  userName: { type: String },
});

export const UserModel = mongoose.model('user', UserSchema);
