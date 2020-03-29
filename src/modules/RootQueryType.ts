import { GraphQLObjectType, GraphQLList, GraphQLString } from 'graphql';

import { UserType } from './user/UserType';
import { findUsers, login, verifyToken } from './user/UserResolvers';

import { ProductType } from './product/Type';
import { products } from './product/Product';

import { SellerType } from './seller/Type';
import { sellers } from './seller/Seller';

let RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root query',
  fields: {
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        userName: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(source, { email, userName, password }) {
        return login({ email, userName, password });
      }
    },
    verifyToken: {
      type: UserType,
      args: {
        token: { type: GraphQLString }
      },
      resolve(source, { token }) {
        return verifyToken(token);
      }
    },
    users: {
      type: new GraphQLList(UserType),
      resolve() {
        return findUsers();
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
