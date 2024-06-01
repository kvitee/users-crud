async function parseRequestBody(request) {
  return new Promise((resolve) => {
    const chunks = [];

    request.on("data", (chunk) => {
      chunks.push(chunk);
    });

    request.on("end", () => {
      resolve(
        JSON.parse(
          Buffer.concat(chunks).toString()
        )
      );
    });
  });
}

export { parseRequestBody };
