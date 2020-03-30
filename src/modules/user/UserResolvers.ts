import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { UserModel } from './UserModel';
import { ICreditCard } from './typing';
let PASSWORD_VALIDATION_REGEX = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

export async function findUsers() {
  const users = await UserModel.find({});

  console.log(users);

  return users;
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
    let isValidPassword = password.match(PASSWORD_VALIDATION_REGEX);
    if (existingUserName) {
      throw new Error('Username is already registered!');
    }
    if (existingUserEmail) {
      throw new Error('Email is already registered!');
    }
    if (!isValidPassword) {
      throw new Error(
        'The password must be with 6 to 16 characters which contain at least one numeric digit and a special character'
      );
    }
    let hashedPassword = await bcrypt.hash(password, 10);
    let user = new UserModel({
      ...userParams,
      password: hashedPassword
    });
    await user.save();
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
