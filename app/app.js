var utils = require('./utils');
var express = require("express");
//var http = require("http");

var app = express();

app.get('/', function(req, res) {
  res.send('<h1>Roux Academy Meetups</h1>');
});

var server = app.listen(3000, function() {
  console.log(utils.getTimeStamp() + " server started listening on port: 3000");
})

/*
  // WITHOUT EXPRESS -------------------------------------

  var myServer = http.createServer(function(req, res) {

  res.writeHead(200, {"Content-Type": "text/html"});
  res.write("<h1>Roux Meetups</h1>");
  res.end();

}).listen(3000);

console.log(getTimeStamp() + " server started listening on port: 3000");
*/
