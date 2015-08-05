module.exports = function(app) {
  "use strict";
   var Promise = require('bluebird');
   var request = Promise.promisify(require("request"));

  
  function list() {
  	//TODO add app.config for api endpoint depending on environment (dev/master/test)
    return request('http://news-app-dev.apps.demo.labs.cf.canopy-cloud.com/all')
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