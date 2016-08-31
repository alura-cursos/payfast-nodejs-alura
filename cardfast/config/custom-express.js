var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

module.exports = function(){
  var app = express();
  app.use(bodyParser.json());

  app.use(expressValidator());

  consign()
   .include('controllers')
   .into(app);

  return app;
}
