module.exports = function(app){
  "use strict";
  var routers = {};
  routers.default = require('./defaultRouter')(app);
  return routers;
};