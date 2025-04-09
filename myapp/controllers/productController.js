const productController = {
    results: function (req, res) {
       return res.render('search-results')
    }, 
    paginaAgregar:function(req,res){
      return res.render('product-add')
    },
    agregarProductos: function(req,res){
      return res.render('product')
    }
 };
 
 
 module.exports = productController;
