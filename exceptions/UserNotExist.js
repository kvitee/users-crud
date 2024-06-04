class UserNotExistError extends Error {
  constructor(userId) {
    super(`User with id = ${userId} does not exist.`);

    this.name = "UserNotExistError";
    this.userId = userId;
  }
}

export { UserNotExistError };
