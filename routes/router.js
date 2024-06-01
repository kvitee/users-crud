import { userRouteHandler } from "./userRoutes/router.js";
import { routeNotFound } from "./routeNotFound.js"


async function routeHandler(request, response) {
  response.setHeader("Content-Type", "application/json");

  if (request.url.startsWith("/users")) {
    await userRouteHandler(request, response);
  } else {
    await routeNotFound(request, response);
  }
}

export { routeHandler };
