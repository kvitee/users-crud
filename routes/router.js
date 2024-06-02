import { userRouteHandler } from "./userRoutes/router.js";
import { routeNotFound } from "./routeNotFound.js"

import { RouteNotFoundError } from "./exceptions/RouteNotFound.js";


async function routeHandler(request, response) {
  response.setHeader("Content-Type", "application/json");

  try {
    if (request.url.startsWith("/users")) {
      await userRouteHandler(request, response);
    } else {
      throw new RouteNotFoundError(request.url, request.method);
    }
  } catch (error) {
    if (error instanceof RouteNotFoundError) {
      await routeNotFound(request, response);
      console.error(error);
    } else {
      throw error;
    }
  }
}

export { routeHandler };
