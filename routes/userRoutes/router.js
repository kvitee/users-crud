import { getUsers } from "./getUsers.js";
import { getUser } from "./getUser.js";
import { createUser } from "./createUser.js";
import { updateUser } from "./updateUser.js";
import { deleteUser } from "./deleteUser.js";

import { RouteNotFoundError } from "../../exceptions/RouteNotFound.js";
import { UserNotExistError } from "../../exceptions/UserNotExist.js";


async function userRouteHandler(request, response) {
  try {
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

      case "PUT":
        await updateUser(request, response);
        break;

      case "DELETE":
        await deleteUser(request, response);
        break;

      default:
        throw new RouteNotFoundError(request.url, request.method);
        break;
    }
  } catch (error) {
    if (error instanceof UserNotExistError) {
      response
        .writeHead(404, "User Not Found")
        .end();

      console.error(error);
    } else {
      throw error;
    }
  }
}

export { userRouteHandler };
