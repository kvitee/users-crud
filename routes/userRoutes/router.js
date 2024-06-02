import { getUsers } from "./getUsers.js";
import { getUser } from "./getUser.js";
import { createUser } from "./createUser.js";

import { RouteNotFoundError } from "../exceptions/RouteNotFound.js";


async function userRouteHandler(request, response) {
  switch (request.method) {
    case "GET":
      if (request.url.match(/^\/users\/?$/)) {
        await getUsers(request, response);
      } else {
        await getUser(request, response);
      }

      break;

    case "POST":
      await createUser(request, response);
      break;

    default:
      throw new RouteNotFoundError(request.url, request.method);
      break;
  }
}

export { userRouteHandler };
