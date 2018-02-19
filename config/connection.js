// Dependenies
var mysql = require("mysql");
var con;
if(process.env.JAWSDB_URL) {
  //Heroku deployment
    con = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  //local host
    con = mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: "nodeuser",
        password: "nodeuser",
        database: "burgers_db"
    });
};

// Make connection
con.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + con.threadId);
});
  
// Export connection for ORM use
module.exports = con;