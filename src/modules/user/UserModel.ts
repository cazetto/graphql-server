import { Schema, model } from 'mongoose';
import { IUser, IUserModel } from './typing';
import isEmail from 'validator/lib/isEmail';

let creditCardSchema: Schema = new Schema({
  name: { type: String, required: true },
  number: { type: String, required: true },
  cvv: { type: String, required: true }
});

let userSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: false },
  userName: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    minlength: 2,
    maxlength: 30
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    validate: function(value: string) {
      const isValidEmail: boolean = isEmail(value);
      if (!isValidEmail) {
        throw new Error(`${value} is not a valid email!`);
      }
      return isValidEmail;
    }
  },
  password: { type: String, required: true },
  gender: { type: Number, enum: [0, 1] },
  creditCards: [creditCardSchema]
});

userSchema
  .virtual('fullName')
  .get(function(this: { firstName: string; lastName: string }) {
    return this.firstName + this.lastName;
  });

userSchema.methods.getGender = function(): string {
  return this.gender > 0 ? 'Male' : 'Female';
};

export let UserModel: IUserModel = model<IUser>('User', userSchema);
