module.exports = function(app) {
  "use strict";
   var Promise = require('bluebird');
   var request = Promise.promisify(require("request"));

  
  function list() {
    return request(app.config.endpoints.news + "all")
    .then(function (content) {
      var response = content[0];
      if (response != null && response.statusCode == 200)  {
       	 return Promise.resolve(response.body);        
      } 
      else {
     	var error = app.error.format('ServiceUnavailable','Error in News Api');
     	throw error;
      } 
    })
  }; 
  return { 
    list: list
  };
};