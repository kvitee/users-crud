import { storage } from "../../storage/arrayStorage.js";

import { parseRequestBody } from "../../utils/requestBodyParser.js";


async function updateUser(request, response) {
  const match = request.url.match(/^\/users\/(\d+)\/?$/);

  if (!match) {
    throw new RouteNotFoundError(request.url, request.method);
  }

  const body = await parseRequestBody(request);

  response
    .writeHead(200)
    .end(
      JSON.stringify(
        await storage.updateUser(+match[1], body)
      )
    );
}

export { updateUser };
