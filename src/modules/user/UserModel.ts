import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  name: { type: String }
});

export const UserModel = mongoose.model('user', UserSchema);
