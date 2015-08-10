var express = require('express');

module.exports = function(app, passport){
	"use strict";


	require('../routes/news.js')(router,app);
	require('../routes/tiles.js')(router,app);
	require('../routes/login.js')(router,app,passport);
	return  router; 

};

