var express = require("express");
var path = require("path")

var session = require("express-session");

var passport = require("./config/passport");

// Compress
var compression = require('compression')


// Sets up the Express App

var app = express();
var PORT = process.env.PORT || 3001;


app.use(compression())

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

