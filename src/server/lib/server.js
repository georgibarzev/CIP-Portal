var Promise = require('bluebird');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

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
 
  server.use('/', function(req, res, next) {
    if (!req.isAuthenticated()) {
    res.redirect('/login');
    }
  });

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