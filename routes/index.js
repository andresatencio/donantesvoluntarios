/*
Solo se usa para pruba de conexion con la DB
*/

var D = require('../model/Schema');

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
  D();
};