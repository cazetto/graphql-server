import { GraphQLSchema } from 'graphql';

import RootQueryType from './modules/RootQueryType';

export let schema = new GraphQLSchema({
  query: RootQueryType
});
