module.exports = function (app) {
  "use strict";

  var log = app.log.get(__filename);
  
  function format(name,message) {
    return  {
    	name: name,
    	message: message
    }; 
  }
 
  return {
    format: format
  };
};