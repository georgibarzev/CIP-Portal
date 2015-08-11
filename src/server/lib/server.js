var Promise = require('bluebird');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var session = require('express-session');
var samlstrategy = require('../../utils/passport');
var passport = require('passport');

module.exports = function (app) {
  "use strict";
  var routers = app.http.routers;
  var httpHandle;
  var cors = require('cors')();
  var server = express();

  server.use(cors);

  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));

  server.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }));

  samlstrategy(passport, app.config);
  console.log(passport);
  
  server.use(passport.initialize());
  server.use(passport.session());

  var passportRouter = routers(app, passport);
  
  server.use(passportRouter.default);

  server.use('/', app.login);

  server.use(express.static(path.join(app.rootDir, '/dist/')));


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