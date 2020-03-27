import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';

export let UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString }
  })
});
