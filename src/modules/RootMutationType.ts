import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLEnumType
} from 'graphql';
import { UserType, GenderType } from './user/UserType';
import { createUser } from './user/UserResolvers';

let RootMutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root Mutation',
  fields: {
    createUser: {
      type: UserType,
      description: 'Create a new user',
      args: {
        firstName: { type: new GraphQLNonNull(GraphQLString) },
        lastName: { type: GraphQLString },
        userName: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
        gender: { type: GenderType }
      },
      resolve: async (
        source,
        { firstName, lastName, email, userName, password, gender }
      ) => {
        let createdUser = await createUser({
          firstName,
          lastName,
          email,
          userName,
          password,
          gender
        });
        let { user, token } = createdUser;
        let result = { ...user, token };
        return result;
      }
    }
  }
});

export default RootMutationType;
