var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('home');
});
router.get('/home', function(req, res) {
  res.render('home');
});
router.get('/skills', function(req, res) {
  res.render('skills');
});
router.get('/projects', function(req, res) {
  res.render('projects');
});
router.get('/contact', function(req, res) {
  res.render('contact');
});
router.get('/extra', function(req, res) {
  res.render('extra');
});
module.exports = router;
