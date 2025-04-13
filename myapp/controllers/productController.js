const db = require('../db/db')
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
      return res.render('product-add')
    }
 };
 
 
 module.exports = productController;
