import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';

export const SellerType = new GraphQLObjectType({
  name: 'Seller',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    recipient: { type: GraphQLString }
  })
});
