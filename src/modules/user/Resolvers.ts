import { UserModel } from './Model';

export function users() {
  return UserModel.find({});
}

export function userMe() {
  return UserModel.findOne({ firstName: 'André' });
}

export function createUser({
  firstName,
  lastName,
  userName,
}: {
  firstName: string;
  lastName: string;
  userName: string;
}) {
  const newUser = new UserModel({
    firstName,
    lastName,
    userName,
  });

  newUser.save();

  return newUser;
}
