var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
require("./config/database.js")("mongodb://localhost/todoReact") 
var consign = require("consign")
var cors = require('cors')
var app = express();

// uncomment after placing your favicon in /public

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

consign()
.include("models")
.include("controllers")
.include("routes")
.into(app)

app.listen(3000, function(){
	console.log("RODANDO")
})

module.exports = app;
