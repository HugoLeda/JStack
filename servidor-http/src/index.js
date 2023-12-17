const http = require('http');

const routes = require('./routes')

const server = http.createServer((request, response) => {
  const route = routes.find((routeObj) => (
    routeObj.endpoint === request.url && routeObj.method === request.method
  ));

  if (route) {
    route.handler(request, response);
  } else {
    response.writeHead(404, { 'Content-type': 'text/html' });
    response.end(`Cannot ${request.method} ${request.url}`);
  };

});

server.listen(3000, () => console.log('Server started at //localhost:3000'))