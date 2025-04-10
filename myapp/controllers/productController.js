const db = require('../db/db');
const productController = {
   product: function (req, res) {
      let idBuscado = req.params.brtand;
      return res.send('product', {id:idBuscado})
   },
    results: function (req, res) {
       return res.render('search-results')
    }, 
    paginaAgregar:function(req,res){
      return res.render('product-add', {usuario: db.usuario})
    },
    agregarProductos: function(req,res){
      return res.render('product-add')
    }
 };
 
 
 module.exports = productController;
