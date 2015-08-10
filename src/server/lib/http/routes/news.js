module.exports = function(router,app){
  "use strict";
  var newsHttpCtrl = app.http.controllers.news;
  router.get('/news', newsHttpCtrl.list);
};