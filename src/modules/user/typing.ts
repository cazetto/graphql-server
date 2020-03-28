import { Document, Types, Model } from 'mongoose';

export enum Gender {
  Male = 0,
  Female = 1
}

export interface ICreditCard {
  name: string;
  number: string;
  cvv: string;
}

interface ICreditCardSchema extends ICreditCard, Document {}

interface IUserSchema extends Document {
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  gender: Gender;
  creditCards: ICreditCardSchema[];
}

interface IUserBase extends IUserSchema {
  getFullName(): string;
  getGender(): string;
}

export interface IUser extends IUserBase {}
export interface IUserModel extends Model<IUser> {}
