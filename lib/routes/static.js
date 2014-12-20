var path = require('path');
var express = require('express');

exports.install = function(app){

  var staticDir = path.join(
    process.cwd(),
    app.get('static dir')
  );

  app.use(
    express.static(staticDir)
  );

  return app;
}