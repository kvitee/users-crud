async function userNotFound(request, response) {
  response
    .writeHead(404, "User Not Found")
    .end();
}

export { userNotFound };
