async function routeNotFound(request, response) {
  response
    .writeHead(404, "Route Not Found")
    .end();
}

export { routeNotFound };
