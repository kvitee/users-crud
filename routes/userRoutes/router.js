import { getUsers } from "./getUsers.js";
import { createUser } from "./createUser.js";

import { RouteNotFoundError } from "../exceptions/RouteNotFound.js";


async function userRouteHandler(request, response) {
  if (request.method === "GET") {
    await getUsers(request, response);
  } else if (request.method === "POST") {
    await createUser(request, response);
  } else {
    throw new RouteNotFoundError(request.url, request.method);
  }
}

export { userRouteHandler };
