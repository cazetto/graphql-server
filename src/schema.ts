import { GraphQLSchema } from 'graphql';

import RootQueryType from './modules/RootQueryType';

export const schema = new GraphQLSchema({
  query: RootQueryType
});
