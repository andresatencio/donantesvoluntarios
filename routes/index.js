/*
Solo se usa para pruba de conexion con la DB
*/



exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};