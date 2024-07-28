var express = require('express');
var router = express.Router();
// const mongoose= require('mongoose');
// mongoose.connect('mongoose://127.0.0.1:27017/portfolio');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
