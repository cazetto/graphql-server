import { GraphQLSchema } from 'graphql';

import RootQueryType from './types/RootQueryType';

export const schema = new GraphQLSchema({
  query: RootQueryType
});
