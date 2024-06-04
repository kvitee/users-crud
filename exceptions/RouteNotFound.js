class RouteNotFoundError extends Error {
  constructor(route, method) {
    super(`Route "${method || "GET"} ${route}" not found.`);

    this.name = "RouteNotFoundError";
    this.route = route;
  }
}

export { RouteNotFoundError };
