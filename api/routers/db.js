var mysql = require('mysql');
var setting = require('./setting.json');
var db;


function connectionDatabase(){
	if(!db){
		db = mysql.createConnection(setting);

		db.connect(function(err){
			if(!err){
				console.log('Database is connected');
			} else {
				console.log('Error connecting database');
			}
		});
	}
	return db; 
}

module.exports = connectionDatabase();