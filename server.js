import { createServer } from "node:http";
import { routeHandler } from "./routes/router.js";


const server = createServer(routeHandler);

server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on 127.0.0.1:3000");
});
