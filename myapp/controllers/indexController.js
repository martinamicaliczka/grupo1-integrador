const db = require('../database/models');

const indexController = {
   index: function (req, res) {

      db.Producto.findAll()
      .then(function(resultados) {

         return res.send(resultados)
         return res.render('index', {productos:resultados, comentarios:comentarios })

         
      }).catch(function(err) {
         return res.send(err)
      })

   },
   register: function(req,res){
      return res.render('index');
   }, 
   login: function(req,res){
      return res.render('index');
   }
};
 
module.exports = indexController;