import pg from "pg";

import { UserNotExistError } from "../exceptions/UserNotExist.js";
import { PropertyRequiredError } from "../exceptions/PropertyRequired.js";


const { Client } = pg;


class Storage {
  constructor() {
    this.client = new Client();

    this.client.connect()
      .then(() => {
        console.log("Client connected successfully.");
      })
      .catch((error) => {
        console.error(error);
        console.warn("Storage is not ready to use.");
      });
  }

  /**
   * Create new user.
   *
   * @param {string} name - Name of new user.
   * @param {number} age - Age of new user.
   * 
   * @return {Promise.<User>} Promise resolved with the created user.
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

    const result = await this.client.query(
      "INSERT INTO users (name, age) VALUES ($1, $2) RETURNING id;",
      [name, age]
    );

    return {
      id: result.rows[0].id,
      name,
      age
    };
  }

  /**
   * Get all stored users.
   *
   * @return {Promise.<User[]>} Promise resolved with the list of stored users.
   */
  async getUsers() {
    const result = await this.client.query(
      "SELECT * FROM users ORDER BY id;"
    );

    return result.rows;
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
    const result = await this.client.query(
      "SELECT * FROM users WHERE id = $1;",
      [id]
    );

    if (result.rows.length === 0) {
      throw new UserNotExistError(id);
    }

    return result.rows[0];
  }

  /**
   * Update user using the given data.
   * 
   * @param {number} id - Id of user to update.
   * @param {string} name - New name of user.
   * @param {number} age - New age of user.
   *
   * @return {Promise.<User>} Promise resolved with the updated user.
   *
   * @throws {UserNotExistError} Throws an error
   *         if user with the given id does not exist.
   * @throws {PropertyRequiredError} Both `name` and `age`
   *         properties must not be null-value.
   */
  async updateUser(id, {name, age}) {
    if (!name) {
      throw new PropertyRequiredError("name");
    }

    if (!age) {
      throw new PropertyRequiredError("age");
    }

    const result = await this.client.query(
      "UPDATE users SET name = $2, age = $3 WHERE id = $1;",
      [id, name, age]
    );

    if (result.rowCount === 0) {
      throw new UserNotExistError(id);
    }

    return { id, name, age };
  }

  /**
   * Delete user by id.
   *
   * @param {number} id - Id of user to delete.
   *
   * @return {Promise.<User>} Promise resolved with the deleted user.
   *
   * @throws {UserNotExistError} Throws an error
   *         if user with the given id does not exist.
   */
  async deleteUser(id) {
    const result = await this.client.query(
      "DELETE FROM users WHERE id = $1 RETURNING *;",
      [id]
    );

    if (result.rowCount === 0) {
      throw new UserNotExistError(id);
    }

    return result.rows[0];
  }
}

const storage = new Storage();

export { storage };
