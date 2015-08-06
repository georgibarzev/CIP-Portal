function Tiles(app) {
  "use strict";
  var Promise = require('bluebird');
  var fs = Promise.promisifyAll(require("fs"));
  var self = this;
  self.app = app;


 Tiles.prototype.getTileData = function getTileData() {
  var tiles = self.app.rootDir + '/src/server/public/tiles.json';
  return fs.readFileAsync(tiles)
    .then(JSON.parse)
    .then(function(json) {
      return Promise.resolve(json);
    })
 };

 Tiles.prototype.list = function list() {
  return self.getTileData();
 };

}

module.exports = Tiles
