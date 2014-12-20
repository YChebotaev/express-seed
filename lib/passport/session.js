var config = require('config');
var passport = require('./passport');
var session = require('cookie-session');

exports.install = function(app){
  app.use(session(config.get('session')));
  app.use(passport.session());
}