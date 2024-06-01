import { getUsers } from "./getUsers.js";
import { createUser } from "./createUser.js";

import { routeNotFound } from "../routeNotFound.js";


async function userRouteHandler(request, response) {
  if (request.method === "GET") {
    await getUsers(request, response);
  } else if (request.method === "POST") {
    await createUser(request, response);
  } else {
    await routeNotFound(request, response);
  }
}

export { userRouteHandler };
