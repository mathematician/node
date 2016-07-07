var express = require('express');
var router = express.Router();
    
router.get('/:num', function(req, res) {
res.send('http://numbersapi.com/' + req.params.num)});

module.exports = router;