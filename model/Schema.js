var mongoose = require('mongoose');
var data = require('./DataConnection');

var db = mongoose.connection;
var flag = false;

var DB = function(){
	if(!flag){
		mongoose.connect(data.uri, data);
		db.on('error', console.error.bind(console, 'connection error:'));
		db.once('open', function callback () {
		  console.log('Conectado ok con: Sangre');
		});
		flag = true;
	}
	else{
		console.log('Ya estabas conectado')
	}

};


module.exports = DB;

