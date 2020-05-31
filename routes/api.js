var express = require('express');

var router = express.Router();

router.get('/', function(req, res) {
    res.send('ami here');
});

router.post('/api', function(req, res) {
    res.send('lemme be here');
});

module.exports = router;