var utils = require('./utils');
var express = require("express");
var reload = require('reload');
var dataFile = require('./data/data.json');

// Initialize APP
var app = express();

// Get port from ENV variable
app.set('port', process.env.PORT || 3000);

// Send this data to entire app
app.set('appData', dataFile);

// View Engine
app.set('view engine', 'ejs');
app.set('views', 'app/views');

// GLOBAL VARS
app.locals.siteTitle = "Roux Meetups";

// Access static content
app.use(express.static('app/public'));

app.use(require('./routes/index'));
app.use(require('./routes/speakers'));

// Reload on changes to APP
reload(app, {verbose: true});

// Start Server
var server = app.listen(app.get('port'), function() {
  console.log(utils.getTimeStamp() + " server started listening on port: " + app.get('port'));
});
