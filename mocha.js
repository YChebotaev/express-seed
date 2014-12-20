_.forEach({
  "chai": "chai"
}, function(module, name){
  global[name] = require(module);
});

chai.should();
global.assert = chai.assert;
global.expect = chai.expect;