const http = require('http');

const app = require('./app');
const config = require('./config');

const server = http.createServer(app);

const onListen = (error) => {
  if (error) {
    console.error(error, 'error starting server');
    process.exit(1);
  }
  const { address, port } = server.address();
  return console.log(`server listening on http://${address}:${port}`);
};

server.once('error', (error) => {
  if (error.code === 'EADDRINUSE') { return onListen(error); }
  throw error;
});

if (config.HOST === '0.0.0.0' || config.HOST === '::') {
  server.listen(config.PORT, onListen);
} else {
  server.listen(config.PORT, config.HOST, onListen);
}
