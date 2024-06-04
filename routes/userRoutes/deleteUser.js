import { storage } from "../../storage/dbStorage.js";

import { RouteNotFoundError } from "../../exceptions/RouteNotFound.js";


async function deleteUser(request, response) {
  const match = request.url.match(/^\/users\/(\d+)\/?$/);

  if (!match) {
    throw new RouteNotFoundError(request.url, request.method);
  }

  const userId = +match[1];
  const deletedUser = await storage.deleteUser(userId);

  response
    .writeHead(200)
    .end(JSON.stringify(deletedUser));
}

export { deleteUser };
