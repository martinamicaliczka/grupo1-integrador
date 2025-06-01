const db = require('../database/models');

const indexController = {
   index: function (req, res) {

      db.Producto.findAll({
         include: [
           { association: "usuario" },
           { association: "comentarios" }]
       })
       .then(function(productos) {
         return res.render('index', {productos: productos});
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