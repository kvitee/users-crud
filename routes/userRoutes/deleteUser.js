import { storage } from "../../storage/dbStorage.js";

import { RouteNotFoundError } from "../../exceptions/RouteNotFound.js";


async function deleteUser(request, response) {
  const match = request.url.match(/^\/users\/(\d+)\/?$/);

  if (!match) {
    throw new RouteNotFoundError(request.url, request.method);
  }

  const userId = +match[1];

  await storage.deleteUser(userId);

  response
    .writeHead(204, "User Deleted")
    .end();
}

export { deleteUser };
