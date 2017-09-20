var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // site statico
  res.render('index', { title: 'Anote.me' });
});

module.exports = router;
