import { parseRequestBody } from "../../utils/requestBodyParser.js";
import { storage } from "../../storage/arrayStorage.js";


async function createUser(request, response) {
  const body = await parseRequestBody(request);

  response
    .writeHead(200)
    .end(
      JSON.stringify(
        await storage.createUser(body)
      )
    );
}

export { createUser };
