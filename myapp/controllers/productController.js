const productController = {
    results: function (req, res) {
      const buscado = req.query.search;
       return res.render('results', {buscado: buscado})
    }
 };
 
 module.exports = productController;