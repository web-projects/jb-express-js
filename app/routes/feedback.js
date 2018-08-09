var express = require('express');

// Setup router
var router = express.Router();

// Setup Main ROUTE
router.get('/feedback', function(req, res) {

  // EJS template from /views/index.ejs
  res.render('feedback', {
    pageTitle: 'Feedback',
    pageID   : 'feedback'
  });

});

module.exports = router;
