import { storage } from "../../storage/arrayStorage.js";

import { RouteNotFoundError } from "../exceptions/RouteNotFound.js";


async function deleteUser(request, response) {
  const match = request.url.match(/^\/users\/(\d+)\/?$/);

  if (!match) {
    throw new RouteNotFoundError(request.url, request.method);
  }

  response
    .writeHead(200)
    .end(
      JSON.stringify(
        await storage.deleteUser(+match[1])
      )
    );
}

export { deleteUser };
