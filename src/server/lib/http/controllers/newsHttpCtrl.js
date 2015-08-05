module.exports = function(app){
  "use strict";

  var log = app.log.get(__filename);
 
  function list(req, res) {
    app.http.utils.respond(app.api.news.list,[req.query],res);
  }
  return {
    list:list
  };
};
