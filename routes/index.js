var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express222' });
  res.sendFile(__dirname + '/index.html') //__dirname = 当前绝对路径
});

module.exports = router;
