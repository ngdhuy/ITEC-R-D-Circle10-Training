var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/a/:a/userid/:userid', (req, res, next)=>{
  res.send(req.params['a'] + " - " + req.params['userid'])
})

module.exports = router;
