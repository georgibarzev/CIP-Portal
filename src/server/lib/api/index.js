var api = function(app){
  "use strict";
  var apis = {};
  var News =  require('./news.js')
  var Tiles = require('./tiles.js')
  apis.news = new News(app)
  apis.tiles = new Tiles(app)
  return apis;
};

module.exports = api;



