async function userRouteHandler(request, response) {
  response
    .status(200)
    .end(
      JSON.stringify({
        message: "Hello, User!"
      })
    );
}

export { userRouteHandler };
