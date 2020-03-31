import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt
} from 'graphql';
import { SellerType } from '../seller/Type';

export let ProductType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Product',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    price: { type: GraphQLString },
    stockQtt: { type: GraphQLInt },
    seller: { type: SellerType }
  })
});
