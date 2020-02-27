import { GraphQLObjectType, GraphQLList } from 'graphql';

import { UserType } from '../modules/user/UserType';
import { UserModel } from '../modules/user/UserModel';

const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root query',
  fields: {
    users: {
      type: new GraphQLList(UserType),
      resolve() {
        return UserModel.find({});
      }
    }
  }
});

export default RootQueryType;
