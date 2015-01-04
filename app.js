var config = require('config');
var logger = require('./logger');

module.exports = require('autoboot')(function(){
  var port = config.get('server.port');
  var host = config.get('server.host');
  require('./lib/app').listen(port, host, function(){
    logger.info("app listening at %s:%s", host, port);
  });
});