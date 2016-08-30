var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

module.exports = function(){
  var app = express();

  app.use(bodyParser.urlencoded({extended:true}));
  app.use(bodParser.json());

  consign()
   .include('controllers')
   .into(app);

  return app;
}
