var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser'); 
var validator = require('express-validator');
var check = require('express-validator/check');


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(validator());



var loginrouter = require('./api/routers/login');
var check = require('express-validator/check');

app.use('/login',loginrouter);


app.use((req, res, next) => {
	var error = new Error('Not Found');
	error.status = 404;
	next(error);
});

app.use((error, req, res, next) => {
	res.status(error.status || 500).json({
		error : {
			message : error.message
		}
	});
});



module.exports = app;
