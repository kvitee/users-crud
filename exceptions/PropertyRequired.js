class PropertyRequiredError extends Error {
  constructor(property) {
    super(`Property "${property}" is required.`);

    this.name = "PropertyRequiredError";
    this.property = property;
  }
}

export { PropertyRequiredError };
