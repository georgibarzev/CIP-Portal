var Promise = require('bluebird');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var passport = require('passport');
var session = require('express-session');


module.exports = function (app) {
  "use strict";
  var routers = app.http.routers;
  var httpHandle;
  var cors = require('cors')();
  var server = express();
  server.use(cors);
  server.use(express.static(path.join(app.rootDir, '/dist/')));
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use('/', routers.default);
  
  var samlstrategy = require('./utils/passport');

  samlstrategy(passport, config);

  app.use(passport.initialize());
  app.use(passport.session());

  /**
   * Start the express server
   */
  server.start = function(){
    var host =  process.env.VCAP_APP_HOST || '0.0.0.0' 
    var port = process.env.VCAP_APP_PORT || 3000;
    return new Promise(function(resolve){
      httpHandle = server.listen(port, host, function() {
        console.log('Listening on http://' +  host + ':' + port + '/' );
        resolve();
      });
    });
  };  
  /**
   * Stop the express server
   */
  server.stop = function(){

    return new Promise(function(resolve) {
      httpHandle.close(function(){
        resolve();
      });
    });
  };
  return server;
};