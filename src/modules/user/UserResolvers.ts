import { hash } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { UserModel } from './UserModel';
import { ICreditCard } from './typing';

export function findUsers() {
  return UserModel.find({});
}

export async function createUser(userParams: {
  firstName: string;
  lastName?: string;
  email: string;
  userName: string;
  password: string;
  gender?: number;
  creditCards?: ICreditCard[];
}) {
  try {
    let { userName, email, password } = userParams;
    let existingUserName = await UserModel.findOne({ userName });
    let existingUserEmail = await UserModel.findOne({ email });
    if (existingUserName) {
      throw new Error('Username is already registered!');
    }
    if (existingUserEmail) {
      throw new Error('Email is already registered!');
    }
    let hashedPassword = await hash(password, 10);

    let user = new UserModel({
      ...userParams,
      password: hashedPassword
    });
    user.save();
    let token = jwt.sign({ id: user.id }, 'SECRET');
    return { user: { ...user._doc }, token };
  } catch (error) {
    throw error;
  }
}
