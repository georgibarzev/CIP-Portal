module.exports = function(app) {
  "use strict";
   var Promise = require('bluebird');
   var fs = Promise.promisifyAll(require("fs"));
  
  function list() {
    var tiles = app.rootDir + '/src/server/public/tiles.json';
    return fs.readFileAsync(tiles)
    .then(JSON.parse)
    .then(function(json) {
      return Promise.resolve(json);
    })
  } 
  return { 
    list: list
  };
};