import Koa, { Request } from 'koa';
import Router from 'koa-router';
import graphqlHTTP from 'koa-graphql';
import cors from '@koa/cors';
import { schema } from './schema';

const app = new Koa();
const router = new Router();

app.use(
  cors({
    origin: '*',
    allowMethods: ['GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'PATCH']
  })
);

router.all(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.use(router.routes()).use(router.allowedMethods());

export default app;
