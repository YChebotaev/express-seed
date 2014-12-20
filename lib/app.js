var express = require('express');
var config = require('config');
var _ = require('lodash');

var app = express();

_.forEach(config.get("app"), function(value, key){
  app.set(key, value);
});

require('./passport').install(app);
require('./routes').install(app);

module.exports = app;