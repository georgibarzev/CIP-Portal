"use strict";

var path = require('path');

var app = {};
app.rootDir = path.dirname(path.dirname(__dirname));
app.config = require(__dirname + '/config/config.js');
var Log = require(__dirname + '/lib/logfilename.js');
app.log = new Log(app);
app.utils = require(__dirname + '/lib/utils')(app);
app.error = app.utils.error;

app.http = require(__dirname + '/lib/http')(app);
app.server = require(__dirname + '/lib/server.js')(app);
app.api = require(__dirname + '/lib/api')(app);
app.error = app.utils.error;

app.start = function(){
  return app.server.start(app);
};

app.stop = function(){
  return app.server.stop(app);
};

module.exports = app;
