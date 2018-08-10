var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

// Setup router
var router = express.Router();

// Setup Main ROUTE
router.get('/chat', function(req, res) {

  res.render('chat', {
    pageTitle: 'Chat',
    pageID   : 'chat'
  });

});

module.exports = router;
