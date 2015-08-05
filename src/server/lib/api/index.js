var api = function(app){
  "use strict";
  var fs = require('fs');
  var path = require('path');
  var apis = {};
  fs.readdirSync(__dirname)
  .filter(function(file) {
      return (file.indexOf('.') !== 0) && (file !== 'index.js') && (file !== 'utils.js');
  })
  .forEach(function(file) {
      var api = require(path.join(__dirname, file))(app);
      var name = file.replace('.js', '');
      apis[name] = api;
  });
  //apis.utils =  require('./utils.js')(app);
  return apis;
};

module.exports = api;



