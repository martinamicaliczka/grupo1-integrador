const db = require('../database/models');

const indexController = {
   index: function (req, res) {

      db.Producto.findAll({
         include: [
           { association: "usuario" },
           { association: "comentarios" }]
       })
       .then(function(productos) {
         return res.render('index', {productos: productos, usuarioLogueado: req.session.usuarioLogueado});
       }).catch(function(err) {
         return res.send(err)
      })

   }
};
 
module.exports = indexController;