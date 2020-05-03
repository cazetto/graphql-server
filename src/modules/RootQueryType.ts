import { GraphQLObjectType, GraphQLList } from 'graphql';

import { UserType } from './user/Type';
import { users } from './user/Resolvers';

import { ProductType } from './product/Type';
import { products } from './product/Resolvers';

const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root query',
  fields: {
    users: {
      type: new GraphQLList(UserType),
      resolve() {
        return users();
      },
    },
    products: {
      type: new GraphQLList(ProductType),
      resolve() {
        return products();
      },
    },
  },
});

export default RootQueryType;
