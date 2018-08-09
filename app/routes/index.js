var express = require('express');

// Setup router
var router = express.Router();

// Setup Main ROUTE
router.get('/', function(req, res) {

  var data = req.app.get('appData');
  var pagePhotos = [];
  var pageSpeakers = data.speakers;

  data.speakers.forEach(function(item) {
    pagePhotos = pagePhotos.concat(item.artwork);
  });

  // EJS template from /views/index.ejs
  res.render('index', {
    pageTitle: 'Home',
    speakers : pageSpeakers,
    artwork  : pagePhotos,
    pageID   : 'home'
  });

});

module.exports = router;
