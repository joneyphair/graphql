import express from 'express';

var router = express.Router();

router.get('/', function(req, res) {
  res.send('home page!');
});

router.get('/about', function(req, res) {
  res.send('about page!');
});


module.exports = router;
