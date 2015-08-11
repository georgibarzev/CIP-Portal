var utils = function(app){
  "use strict";
  utils.error = require('./error')(app);  
  utils.login = require('./login'); 
  utils.passport = require('./passport'); 
  return utils;
};

module.exports = utils;

