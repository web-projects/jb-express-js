var utils = require('./utils');
var express = require("express");
//var http = require("http");
var dataFile = require('./data/data.json');

// Initialize APP
var app = express();

// Get port from ENV variable
app.set('port', process.env.PORT || 3000);

// Setup ROUTE
app.get('/', function(req, res) {

  var info = "";

  res.send(`
            <h1>Welcome</h1>
            <p>Roux Academy Meetups put together artists from all walks of life</p>
          `);
});

app.get('/speakers', function(req, res) {

  var info = "";

  dataFile.speakers.forEach(function(item) {
    info += `
    <li>
      <h2>${item.name}</h2>
      <p>${item.summary}</p>
    </li>
    `;
  });

  res.send(`
            <h1>Roux Academy Meetups</h1>
            ${info}
          `);
});

app.get('/speakers/:speakersid', function(req, res) {

  var speaker = dataFile.speakers[req.params.speakersid];

  res.send(`
            <h1>${speaker.title}</h1>
            <h2>with ${speaker.name}</h2>
            <p>${speaker.summary}</p>
          `);
});

var server = app.listen(app.get('port'), function() {
  console.log(utils.getTimeStamp() + " server started listening on port: " + app.get('port'));
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
