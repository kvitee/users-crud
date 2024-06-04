import { storage } from "../../storage/dbStorage.js";
import { parseRequestBody } from "../../utils/requestBodyParser.js";

import { RouteNotFoundError } from "../../exceptions/RouteNotFound.js";


async function createUser(request, response) {
  const match = request.url.match(/^\/users\/?$/);

  if (!match) {
    throw new RouteNotFoundError(request.url, request.method);
  }

  const body = await parseRequestBody(request);
  const createdUser = await storage.createUser(body);

  response
    .writeHead(200)
    .end(JSON.stringify(createdUser));
}

export { createUser };
