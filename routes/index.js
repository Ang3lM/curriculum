var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mano dile a tu coñao que le quiero puyar la cagalera a su hermana menor' });
});

module.exports = router;
