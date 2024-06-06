import { createServer } from "node:http";
import { routeHandler } from "./routes/router.js";

import pg from "pg";

import { setPgTypeParsers } from "./utils/pgTypeParsers.js";


const server = createServer(routeHandler);

server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on 127.0.0.1:3000");
});

/* Setting custom Postgres type parsers. */
setPgTypeParsers(pg);
