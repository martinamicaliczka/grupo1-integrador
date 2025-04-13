const data = require('../db/db'); 
const usuarios = data.usuarios;
const productController = {
   product: function (req, res) {
      let idBuscado = req.params.brtand;
      return res.send('product', {id:idBuscado})
   },
   homeProduct: function(req,res){
      return res.render('product')
   },
    results: function (req, res) {
       return res.render('search-results')
    },

    agregarProductos: function(req,res){
      const usuarioLogeado = usuarios.usuario;
      return res.render('product-add', {usuarioLogeado});
    }
 };
 
 
 module.exports = productController;
