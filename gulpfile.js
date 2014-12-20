var _ = require('lodash');

_.forEach({
  "_": "lodash",
  "gulp": "gulp",
  "jade": "gulp-jade",
  "stylus": "gulp-stylus",
  "browserify": "browserify",
  "source": "vinyl-source-stream"
}, function(module, name){
  global[name] = require(module);
});

require('./tasks');

module.exports = gulp;