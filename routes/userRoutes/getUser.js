import { storage } from "../../storage/dbStorage.js";

import { RouteNotFoundError } from "../../exceptions/RouteNotFound.js";


async function getUser(request, response) {
  const match = request.url.match(/^\/users\/(\d+)\/?$/);

  if (!match) {
    throw new RouteNotFoundError(request.url, request.method);
  }

  const userId = +match[1];
  const user = await storage.getUser(userId);

  response
    .writeHead(200)
    .end(JSON.stringify(user));
}

export { getUser };
