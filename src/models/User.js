const {getJSON, saveJSON} = require('../utils/fileHelpers');

class User {
  constructor() {
    this.saveData = saveJSON;
    this.fetchData = getJSON;
  }

  async find(id) {
    // fetch the users
    // found the users
    //   if found return the user
    //   if not found return Promise.reject(new Error(`User with id ${id} not found`));
  }

  async create(user) {
    // fetch the users
    // append the user to all the users
    // save the users
    // return the saved user
  }
};

module.exports = new User();