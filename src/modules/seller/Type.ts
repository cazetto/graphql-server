import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList
} from 'graphql';
import { ProductType } from '../product/Type';

export let SellerType = new GraphQLObjectType({
  name: 'Seller',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    recipient: { type: GraphQLString },
    products: { type: new GraphQLList(ProductType) }
  })
});
