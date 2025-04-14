const data = require('../db/db'); 
const usuarios = data.usuarios;
const productos = data.productos;
const comentarios = data.comentarios;

const productController = {
   product: function (req, res) {
      const idBuscado = req.params.id;
      return res.render('product', {productos:productos, comentarios:comentarios, idBuscado: idBuscado})
   },
   homeProduct: function(req,res){
      return res.render('product')
   },
    results: function (req, res) {
      return res.render('search-results', {productos:productos, comentarios:comentarios});
    },

    agregarProductos: function(req,res){
      const usuarioLogeado = usuarios.usuario;
      return res.render('product-add', {usuarioLogeado: usuarioLogeado});
    }
 };
 
 
 module.exports = productController;
