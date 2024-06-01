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
   * @return {Promise.<User>} Promise resolved with the created user.
   */
  async createUser({name, age}) {
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
   * @return {Promise.<User[]>} Promise resolved with the list of stored users.
   */
  async getUsers() {
    return this.data;
  }

  /**
   * Get user by id.
   *
   * @param {number} id - Id of user to get.
   *
   * @return {Promise.<User>} Promise resolved with the user with the given id
   *         or `null` if it is not found.
   */
  async getUser(id) {
    return this.data.find(user => user.id === id) ?? null;
  }

  /**
   * Update user using the given data.
   * 
   * @param {number} id - Id of user to update.
   * @param {string} name - New name of user.
   * @param {number} age - New age of user.
   *
   * @return {Promise.<User>} Promise resolved with the updated user
   *         or `null` if user with the given id is not found.
   */
  async updateUser({id, name, age}) {
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
   * @return {Promise.<User>} Promise resolved with the deleted user
   *         or `null` if nothing was deleted.
   */
  async deleteUser(id) {
    const index = this.data.findIndex(user => user.id === id);

    if (index === -1) {
      return null;
    }

    return this.data.splice(index, 1)[0];
  }
}

const storage = new Storage();

export { storage };
