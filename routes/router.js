import { userRouteHandler } from "./userRoutes/router.js";


async function routeHandler(request, response) {
  response.setHeader("Content-Type", "application/json");

  if (request.url.startsWith("/users")) {
    await userRouteHandler(request, response);
  } else {
    response
      .status(404)
      .end(
        JSON.stringify({
          error: "Route not Found"
        })
      );
  }
}

export { routeHandler };
