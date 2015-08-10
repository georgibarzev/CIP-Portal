var express = require('express');

module.exports = function(app, passport){
	"use strict";

	var router = new express.Router();

	require('../routes/news.js')(router,app);
	require('../routes/tiles.js')(router,app);
	require('../routes/login.js')(router,app,passport);
	return  router; 

};

