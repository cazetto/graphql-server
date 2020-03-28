import { Schema, model } from 'mongoose';
import { IUser, IUserModel } from './typing';

let CreditCardSchema: Schema = new Schema({
  name: { type: String, required: true },
  number: { type: String, required: true },
  cvv: { type: String, required: true }
});

let UserSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: false },
  userName: { type: String, unique: true, required: true, lowercase: true },
  password: { type: String, required: true },
  gender: { type: Number, enum: [0, 1], default: 0, required: true },
  creditCards: [CreditCardSchema]
});

UserSchema.virtual('fullName').get(function(this: {
  firstName: string;
  lastName: string;
}) {
  return this.firstName + this.lastName;
});

UserSchema.methods.getGender = function(): string {
  return this.gender > 0 ? 'Male' : 'Female';
};

export let UserModel: IUserModel = model<IUser>('User', UserSchema);
