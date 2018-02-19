//DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");

//Express Configuration
var app = express();
var PORT = process.env.PORT || 8000;

//Setup for Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Server Listener
app.listen(PORT, function() {
    console.log("App is listening on PORT: " + PORT);
})