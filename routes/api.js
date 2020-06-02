var express = require('express');
var connection = require('../config/connection');

var router = express.Router();

router.get('/all', function(req, res) {
    let dbQuery = 'SELECT * FROM tips';
    connection.query(dbQuery, (err, result)=>{
        if(err) throw err;
        res.json(result)
    })

    
});

router.post('/new', function(req, res) {
    console.log(req.body);
    let dbQuery = 'INSERT INTO tips (content, author, rating) VALUES (?,?,?)';
    connection.query(dbQuery,[req.body.content, req.body.author, req.body.rating] ,(err, result)=>{
        if (err){
            throw err
        }
        console.log(result)
    })
});

module.exports = router;