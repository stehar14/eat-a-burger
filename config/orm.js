// Import MySQL connection.
var con = require("./connection.js");

// ORM Object for all our SQL statement functions.
var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    con.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  create: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;
    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += vals.toString();
    queryString += ")";
    console.log(queryString);
    con.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  
  update: function(table, cols, vals, condition) {
    var queryString = "UPDATE " + table;
    queryString += " SET ";
    queryString += cols;
    queryString += "=";
    queryString += vals;
    queryString += " WHERE ";
    queryString += condition;
    queryString += ";";
    console.log(queryString);
    con.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
    });
  }
};

// Export the orm object for the model (cat.js).
module.exports = orm;