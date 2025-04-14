const dataebase = require('../db/db');
const productos = dataebase.productos;
const comentarios = dataebase.comentarios;
const indexController = {
   index: function (req, res) {
      return res.render('index', {productos:productos, comentarios:comentarios })
   },
   register: function(req,res){
      return res.render('index');
   }, 
   login: function(req,res){
      return res.render('index');
   }
};
 
module.exports = indexController;