module.exports = function(app){
  "use strict";

  var log = app.log.get(__filename);
  
  function list(req, res) {
    app.http.utils.respond(app.api.tiles.list,[req.query],res);
  }
  return {
    list:list
  };
};
