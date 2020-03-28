import { UserModel } from './UserModel';
import { Gender, ICreditCard, IUser, IUserModel } from './typing';

export function users() {
  return UserModel.find({});
}

export function createUser(user: {
  firstName: string;
  lastName?: string;
  userName: string;
  password: string;
  gender?: number;
  creditCards?: ICreditCard[];
}) {
  const newUser = new UserModel(user);
  newUser.save();
}
