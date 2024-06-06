import { userRouteHandler } from "./userRoutes/router.js";

import { RouteNotFoundError } from "../exceptions/RouteNotFound.js";
import { PropertyRequiredError } from "../exceptions/PropertyRequired.js";


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
      response.writeHead(404, "Route Not Found");
    } else if (error instanceof PropertyRequiredError) {
      response.writeHead(422, "Property Required");
    } else {
      throw error;
    }

    response.end(
      JSON.stringify({ error })
    );
  } finally {
    response.end();
  }
}

export { routeHandler };
