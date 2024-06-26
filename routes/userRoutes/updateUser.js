import { storage } from "../../storage/dbStorage.js";
import { parseRequestBody } from "../../utils/requestBodyParser.js";

import { RouteNotFoundError } from "../../exceptions/RouteNotFound.js";


async function updateUser(request, response) {
  const match = request.url.match(/^\/users\/(\d+)\/?$/);

  if (!match) {
    throw new RouteNotFoundError(request.url, request.method);
  }

  const userId = +match[1];
  const body = await parseRequestBody(request);

  await storage.updateUser(userId, body);

  response
    .writeHead(204, "User Updated")
    .end();
}

export { updateUser };
