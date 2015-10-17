var express = require('express');
var router = express.Router();
var PG = require('pg');
var conString = "postgres://" + process.env.RDS_USERNAME + ":" + process.env.RDS_PASSWORD + "@" + process.env.RDS_HOSTNAME + "/ebdb";

PG.connect(conString, function(err, client, done) {
	if(err) {
		return console.error('error fetching client from pool', err, "connString: ", conString);
	}
	client.query('SELECT NOW() AS "theTime"', function(err, result) {
		if(err) {
		  	return console.error('error running query', err);
		}
		console.log(result.rows[0].theTime);
		//output: Tue Jan 15 2013 19:12:47 GMT-600 (CST) 
		client.end();
	});
});

router.get('/check', function(req, res, next) {
  	var rsvpCode = req.query.code;


  	res.send('respond with a resource');
});

router.get('/reserve', function(req, res, next) {
  	

  	res.send('respond with a resource');
});

module.exports = router;
