import mongoose, { Schema } from 'mongoose';

let UserSchema = new Schema({
  name: { type: String }
});

export let UserModel = mongoose.model('user', UserSchema);
