const { getJSON, saveJSON } = require("../utils/fileHelpers");

class User {
  constructor() {
    this.saveData = saveJSON;
    this.fetchData = getJSON;
  }

  async find(userId) {
    // fetch the users
    let users = this.fetchData();
    // found the users
    let user = users.find(({ id }) => id === userId);
    //   if found return the user
    if (user) {
      return user;
    }
    //   if not found return Promise.reject(new Error(`User with id ${id} not found`));
    return Promise.reject(`User with id ${userId} not found`);
  }

  async create(user) {
    // fetch the users
    let users = this.fetchData();
    // append the user to all the users
    users.push(user);
    // save the users
    this.saveData(users);
    // return the saved user
    return user;
  }
}

module.exports = new User();
