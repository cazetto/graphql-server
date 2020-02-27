import 'core-js';
import { createServer } from 'http';

const requestListener = function(req, res) {
  res.writeHead(200);
  res.end('Server running!');
};

const server = createServer(requestListener);
server.listen(8080);

if (module.hot) {
  module.hot.accept('./index.js', () => {
    app.removeListener('request', currentApp);
    app.on('request', app);
    currentApp = app;
  });
}
