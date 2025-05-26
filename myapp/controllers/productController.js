const db = require('../database/models'); 


const productController = {
   product: function (req, res) {
      const idBuscado = req.params.id;
      return res.render('product', {productos:productos, comentarios:comentarios, idBuscado: idBuscado})
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
