module.exports = function(app, server, passport){
  "use strict";
  var routers = {};
  routers.default = require('./defaultRouter')(app,server,passport);
  return routers;
};