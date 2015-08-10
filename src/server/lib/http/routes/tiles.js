module.exports = function(router,app){
  "use strict";
  var tilesHttpCtrl = app.http.controllers.tiles;
  router.get('/tiles', checkAuth, tilesHttpCtrl.list);
};