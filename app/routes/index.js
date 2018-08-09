var express = require('express');

// Setup router
var router = express.Router();

// Setup Main ROUTE
router.get('/', function(req, res) {

  /*var info = "";

  res.send(`
            <link rel="stylesheet" type="text/css" href="css/style.css">
            <h1>Welcome to Roux Meetings</h1>
            <img src="/images/misc/background.jpg" alt="background" style="height: 300px;">
            <p>Roux Academy Meetups put together artists from all walks of life</p>
            <script src="/reload/reload.js></script>"
          `);
  */

  var data = req.app.get('appData');
  var pagePhotos = [];

  data.speakers.forEach(function(item) {
    pagePhotos = pagePhotos.concat(item.artwork);
  });

  // EJS template from /views/index.ejs
  res.render('index', {
    pageTitle: 'Home',
    artwork  : pagePhotos,
    pageID   : 'home'
  });

});

module.exports = router;
