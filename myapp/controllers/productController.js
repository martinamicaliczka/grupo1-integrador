const data = require('../db/db'); 
const usuarios = data.usuarios;
const productController = {
   product: function (req, res) {
      let idBuscado = req.params.brand;
      return res.send('product', {id:idBuscado})
   },
   homeProduct: function(req,res){
      return res.render('product', {productos: db.productos})
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
