// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

// Define burger object with functions to interact with the database
var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(cols, vals, condition) {
    orm.update("burgers", cols, vals, condition)    
  }
};

// Export the database functions for the controller
module.exports = burger;