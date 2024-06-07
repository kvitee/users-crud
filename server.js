import { createServer } from "node:http";
import { routeHandler } from "./routes/router.js";

import pg from "pg";

import { setPgTypeParsers } from "./utils/pgTypeParsers.js";


const server = createServer(routeHandler);

const port = process.env.CRUD_PORT || 3000;

server.listen(port, "127.0.0.1", () => {
  console.log(`Listening on 127.0.0.1:${port}`);
});

/* Setting custom Postgres type parsers. */
setPgTypeParsers(pg);
