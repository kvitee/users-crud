import { UserNotExistError } from "../exceptions/UserNotExist.js";
import { PropertyRequiredError } from "../exceptions/PropertyRequired.js";


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
   * @return {Promise.<number>} Promise resolved with the id of created user.
   *
   * @throws {PropertyRequiredError} Both `name` and `age`
   *         properties must not be null-value.
   */
  async createUser({name, age}) {
    if (!name) {
      throw new PropertyRequiredError("name");
    }

    if (!age) {
      throw new PropertyRequiredError("age");
    }

    const user = {
      id: this.count++,
      name,
      age
    };

    this.data.push(user);

    return user.id;
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
   * @return {Promise.<User>} Promise resolved with the user with the given id.
   *
   * @throws {UserNotExistError} Throws an error
   *         if user with the given id does not exist.
   */
  async getUser(id) {
    const user = this.data.find(user => user.id === id);

    if (user === undefined) {
      throw new UserNotExistError(id);
    }

    return user;
  }

  /**
   * Update user using the given data.
   * 
   * @param {number} id - Id of user to update.
   * @param {string} name - New name of user.
   * @param {number} age - New age of user.
   *
   * @return {Promise} Promise resolved if user was updated successfully.
   *
   * @throws {UserNotExistError} Throws an error
   *         if user with the given id does not exist.
   * @throws {PropertyRequiredError} Both `name` and `age`
   *         properties must not be null-value.
   */
  async updateUser(id, {name, age}) {
    const user = await this.getUser(id);

    if (!name) {
      throw new PropertyRequiredError("name");
    }

    if (!age) {
      throw new PropertyRequiredError("age");
    }

    user.name = name;
    user.age = age;
  }

  /**
   * Delete user by id.
   *
   * @param {number} id - Id of user to delete.
   *
   * @return {Promise} Promise resolved if user was deleted successfully.
   *
   * @throws {UserNotExistError} Throws an error
   *         if user with the given id does not exist.
   */
  async deleteUser(id) {
    const index = this.data.findIndex(user => user.id === id);

    if (index === -1) {
      throw new UserNotExistError(id);
    }

    this.data.splice(index, 1);
  }
}

const storage = new Storage();

export { storage };
