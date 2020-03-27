import { GraphQLObjectType, GraphQLList } from 'graphql';

import { UserType } from './user/UserType';
import { UserModel } from './user/UserModel';

import { ProductType } from './product/Type';
import { products } from './product/Resolvers';

import { SellerType } from './seller/Type';
import { sellers } from './seller/Resolvers';

const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root query',
  fields: {
    users: {
      type: new GraphQLList(UserType),
      resolve() {
        return UserModel.find({});
      }
    },
    products: {
      type: new GraphQLList(ProductType),
      resolve() {
        return products();
      }
    },
    sellers: {
      type: new GraphQLList(SellerType),
      resolve() {
        return sellers();
      }
    }
  }
});

export default RootQueryType;
