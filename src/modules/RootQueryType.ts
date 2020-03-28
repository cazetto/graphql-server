import { GraphQLObjectType, GraphQLList } from 'graphql';

import { UserType } from './user/UserType';
import { findUsers } from './user/UserResolvers';

import { ProductType } from './product/Type';
import { products } from './product/Product';

import { SellerType } from './seller/Type';
import { sellers } from './seller/Seller';

let RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root query',
  fields: {
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
