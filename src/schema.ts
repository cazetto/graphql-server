import { GraphQLSchema } from 'graphql';

import RootQueryType from './modules/RootQueryType';
import RootMutationType from './modules/RootMutationType';

export let schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType
});
