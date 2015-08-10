var express = require('express');
var samlstrategy = require('../../utils/passport');
var passport = require('passport');
var session = require('express-session');

module.exports = function(app, server, passport){
	"use strict";

	var router = server;

	require('../routes/news.js')(router,app);
	require('../routes/tiles.js')(router,app);
	require('../routes/login.js')(router,app,passport);
	return  router; 

};

