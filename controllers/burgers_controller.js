// Dependencies
var express = require("express");
// Import burger.js from models folder
var burger = require("../models/burger.js")
// Define express router
var router = express.Router();

// Defining Routes
// Define homepage route
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// Define post route for adding burger
router.post("/", function(req, res) {
  var new_name = '"' + req.body.burger + '"';
  burger.create(["burger_name"], [new_name], function(result) {
    res.json({ id: result.insertId });
  });
});

// Define post route to update 
router.put("/", function(req, res) {
  console.log(req.body);
  burger.update("devoured", 1, "id = " + req.body.id);
});

// Export routes for server.js to use.
module.exports = router;
