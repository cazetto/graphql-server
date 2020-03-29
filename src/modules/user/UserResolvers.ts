import bcrypt from 'bcryptjs';
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
    let hashedPassword = await bcrypt.hash(password, 10);

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

export async function login(userParams: {
  email?: string;
  userName?: string;
  password: string;
}) {
  let { email, userName, password } = userParams;
  if (!email && !userName) {
    throw new Error('Email or Username must be informed!');
  }
  try {
    let user;
    if (email) {
      user = await UserModel.findOne({ email });
    } else {
      user = await UserModel.findOne({ userName });
    }
    if (!user) {
      throw new Error('User does not exist');
    }
    let passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid) {
      throw new Error('Wrong password!');
    }
    const token = jwt.sign({ id: user._id }, 'SECRET');
    return { ...user._doc, token };
  } catch (error) {
    throw error;
  }
}

export async function verifyToken(token: string) {
  try {
    let decoded: any = jwt.verify(token, 'SECRET');
    let user = await UserModel.findOne({ _id: decoded.id });
    return user?._doc;
  } catch (error) {
    throw error;
  }
}
