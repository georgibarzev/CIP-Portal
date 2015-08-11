var utils = function(app){
  "use strict";
  utils.error = require('./error')(app);  
  utils.login = require('./login'); 
  utils.passport
  return utils;
};

module.exports = utils;

