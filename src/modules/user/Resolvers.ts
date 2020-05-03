import { UserModel } from './Model';

export function users() {
  return UserModel.find({});
}

export function createUser({ name }: { name: string }) {
  const newUser = new UserModel({
    name,
  });

  newUser.save();

  return newUser;
}
