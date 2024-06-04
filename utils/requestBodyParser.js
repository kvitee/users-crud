async function parseRequestBody(request) {
  return new Promise((resolve) => {
    const chunks = [];

    request.on("data", (chunk) => {
      chunks.push(chunk);
    });

    request.on("end", () => {
      const body = Buffer.concat(chunks).toString();

      resolve(
        JSON.parse(body || "{}")
      );
    });
  });
}

export { parseRequestBody };
