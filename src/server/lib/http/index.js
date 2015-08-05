	var http = function(app){
  "use strict";
  http.error = require('./error')(app);  
  http.utils = require('./utils')(app);
  http.controllers = require('./controllers')(app);
  app.http = http;
  http.routers = require('./routers')(app);
  return http;
};

module.exports = http;

