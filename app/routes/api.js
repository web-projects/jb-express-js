var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

// Setup router
var router = express.Router();

var feedbackData = require('../data/feedback.json');

// Setup Main ROUTE
router.get('/api', function(req, res) {

  res.json(feedbackData);

});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

// POST requests
router.post('/api', function(req, res) {

  feedbackData.unshift(req.body);

  // Update JSON File
  fs.writeFile('app/data/feedback.json', JSON.stringify(feedbackData), 'UTF-8', function(err) {
      if(err) {
        console.log(err);
      }
  });

  res.json(feedbackData);

});

// DELETE Requests
router.delete('/api/:id', function(req, res) {

  //console.log('delete request for: ' + req.params.id);
  feedbackData.splice(req.params.id, 1);

  // Update JSON File
  fs.writeFile('app/data/feedback.json', JSON.stringify(feedbackData), 'UTF-8', function(err) {
    if(err) {
      console.log(err);
    }
  });

  res.json(feedbackData);

});

module.exports = router;
