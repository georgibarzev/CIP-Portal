module.exports = function(app, passport){
  "use strict";
  var routers = {};
  routers.default = require('./defaultRouter')(app, passport);
  return routers;
};