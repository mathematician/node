var express = require('express');
var router = express.Router();
    
router.get('/', function(req, res) {
    res.redirect('https://en.wikipedia.org/wiki/Special:Random');
});

module.exports = router;