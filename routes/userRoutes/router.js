import { getUsers } from "./getUsers.js";
import { routeNotFound } from "../routeNotFound.js";


async function userRouteHandler(request, response) {
  if (request.method === "GET") {
    await getUsers(request, response);
  } else {
    await routeNotFound(request, response);
  }
}

export { userRouteHandler };
