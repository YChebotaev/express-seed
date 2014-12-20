var passport = require('./passport');
var session = require('./session');

module.exports = function(app){
  app.use(passport.initialize());
  session.install(app);
};