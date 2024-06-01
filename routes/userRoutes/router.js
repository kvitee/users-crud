async function userRouteHandler(request, response) {
  response
    .writeHead(200)
    .end(
      JSON.stringify({
        message: "Hello, User!"
      })
    );
}

export { userRouteHandler };
