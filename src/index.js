import 'core-js';

import { createServer } from 'http';

import app from './app';
import { connectDatabase } from './database';
import { GRAPHQL_PORT } from './config';

(async () => {
  try {
    await connectDatabase();
    console.log('Database connection established!');
  } catch (error) {
    console.error('Could not connect to database', { error });
    throw error;
  }

  let server = createServer(app.callback());
  server.listen(GRAPHQL_PORT, () => {
    console.log(`Server started on port ${GRAPHQL_PORT}`);
    console.log(
      `GraphiQL is running here: http://localhost:${GRAPHQL_PORT}/graphql`
    );
  });
})();

let currentApp = app;

if (module.hot) {
  module.hot.accept('./index.js', () => {
    app.removeListener('request', currentApp);
    app.on('request', app);
    currentApp = app;
  });
}
