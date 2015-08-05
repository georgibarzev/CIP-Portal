module.exports = function(app){
  "use strict";
  var controllers = {};
  controllers.news = require('./newsHttpCtrl')(app);
  controllers.tiles = require('./tilesHttpCtrl')(app);
  return controllers;
};