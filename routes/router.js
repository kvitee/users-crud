import { userRouteHandler } from "./userRoutes/router.js";


async function routeHandler(req, res) {
  if (req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "application/json"
    });

    res.end(JSON.stringify({
      message: "Hello, World!"
    }));
  } else if (req.url.startsWith("/users")) {
    await userRouteHandler(req, res);
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json"
    });

    res.end(JSON.stringify({
      error: "Endpoint not Found"
    }));
  }
}

export { routeHandler };
