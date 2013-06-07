var mongoose = require('mongoose');
var data = require('./DataConnection');

var db = mongoose.connection;



var connection = function(){
	mongoose.connect(data.uri, data);
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function callback () {
	  console.log('Conectado ok con: Sangre');
	});
};

module.exports = connection;

