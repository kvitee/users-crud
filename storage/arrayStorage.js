class Storage {
  constructor() {
    this.data = [];
    this.count = 1;
  }

  /**
   * Create new user.
   *
   * @param {string} name - Name of new user.
   * @param {number} age - Age of new user.
   * 
   * @return {User} Created user.
   */
  createUser({name, age}) {
    const user = {
      id: this.count++,
      name: name ?? null,
      age: age ?? null
    };

    this.data.push(user);

    return user;
  }

  /**
   * Get all stored users.
   *
   * @return {User[]} List of users.
   */
  getUsers() {
    return this.data;
  }

  /**
   * Get user by id.
   *
   * @param {number} id - Id of user to get.
   *
   * @return {User} User with the given id or `null`
   *                  if it is not found.
   */
  getUser(id) {
    return this.data.find(user => user.id === id) ?? null;
  }

  /**
   * Update user using the given data.
   * 
   * @param {number} id - Id of user to update.
   * @param {string} name - New name of user.
   * @param {number} age - New age of user.
   *
   * @return {User} Updated user or `null` if user with
   *         the given id is not found.
   */
  updateUser({id, name, age}) {
    const user = this.getUser(id);

    if (user === null) {
      return null;
    }

    if (name !== undefined) {
      user.name = name;
    }

    if (age !== undefined) {
      user.age = age;
    }

    return user;
  }

  /**
   * Delete user by id.
   *
   * @param {number} id - Id of user to delete.
   *
   * @return {User} Deleted user or `null` if nothing was deleted.
   */
  deleteUser(id) {
    const index = this.data.findIndex(user => user.id === id);

    if (index === -1) {
      return null;
    }

    return this.data.splice(index, 1)[0];
  }
}

const storage = new Storage();

export { storage };
