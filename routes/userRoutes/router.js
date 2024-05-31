async function userRouteHandler(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(JSON.stringify({
    message: "Hello, User!"
  }));
}

export { userRouteHandler };
