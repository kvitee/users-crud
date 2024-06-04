import { userRouteHandler } from "./userRoutes/router.js";

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
      response
        .writeHead(404, "Route Not Found")
        .end();

      console.error(error);
    } else {
      throw error;
    }
  }
}

export { routeHandler };
