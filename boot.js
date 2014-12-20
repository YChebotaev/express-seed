var _ = require('lodash');

_.forEach({
  "_": "lodash",
  "r": "rethinkdb",
  "Promise": "bluebird",
  "db": "./db",
  "logger": "./logger"
}, function(module, name){
  global[name] = require(module);
});

module.exports = function(cb){
  return new Promise(function(accept, reject){
    return db.then(accept, reject);
  }).nodeify(cb);
}