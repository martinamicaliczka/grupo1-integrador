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
      return res.render('product-add')
    }
 };
 
 
 module.exports = productController;
