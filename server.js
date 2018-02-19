// Dependencies
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require("body-parser");

// Define port
var PORT = process.env.PORT || 3000;

// Initialize app
var app = express();

// Serve static content for the app from the "public" directory in the application directory
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Set up Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

// Start the app
app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
