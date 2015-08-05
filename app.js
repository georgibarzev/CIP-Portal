"use strict";
var app = {};
app.rootDir = __dirname;
var Log = require(__dirname + '/src/server/lib/logfilename.js');
app.log = new Log(app);
app.utils = require(__dirname + '/src/server/lib/utils')(app);
app.error = app.utils.error;
//app.config = require('config');
//app.data  = require(__dirname + 'src/server/lib/data')(app);

app.http = require(__dirname + '/src/server/lib/http')(app);
app.server = require(__dirname + '/src/server/lib/server.js')(app);
app.api = require(__dirname + '/src/server/lib/api')(app);
app.error = app.utils.error;

app.start = function(){
  return app.server.start(app);
};

app.stop = function(){
  return app.server.stop(app);
};

module.exports = app;
