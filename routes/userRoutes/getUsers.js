import { storage } from "../../storage/arrayStorage.js";


async function getUsers(request, response) {
  response
    .writeHead(200)
    .end(
      JSON.stringify(
        await storage.getUsers()
      )
    );
}

export { getUsers };
