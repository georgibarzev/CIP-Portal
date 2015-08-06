function News(app) {
  "use strict";  
  var Promise = require('bluebird');
  var request = Promise.promisify(require("request"))
  var self = this;

  self.app = app;


News.prototype.requestNews = function requestNews() {
    return request(self.app.config.endpoints.news + "all")
};

News.prototype.list = function list() {
  return self.requestNews()
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
}

module.exports = News