var express = require('express');

var router = express();

var db = require('./db.js');
var {check} = require('express-validator/check');

//var test = require('./test');

router.get('/',(req, res, next) => {
	db.query("select * from student",(error, rows, field) => {
		if(!error){
			res.status(200).json({
				message : rows
			});
		} else {
			res.status(400).json({
				message : 'error'
			});
		}
	});
});


router.post('/register',(req, res, next) => {
		
		var firstName = req.body.fname;
		var lastName = req.body.lname;
		var userName = req.body.username;
		var password = req.body.password;
		var rePassword = req.body.repassword;
		var mobile = req.body.mobile;


	res.status(200).json({
		message : {
			fname : firstName,
			lname : lastName,
			username : userName,
			password : password,
			repassword : rePassword,
			mobile : mobile

		}
	});
});

module.exports = router;