const http = require('http');

const server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});


server.listen(8000);


console.log("Server running at :some:port");
