const db = require('../database/models'); 
const producto = db.Producto;
const op = db.Sequelize.Op;

const productController = {
   product: function (req, res) {
      const idBuscado = req.params.id;
      return res.render('product', {productos:productos, comentarios:comentarios, idBuscado: idBuscado})
   },
   results: function (req, res) {
    let buscado = req.query.search;
    buscado = "%" + buscado + "%";
  
    producto.findAll({
      where: {
        [op.or]: [
          { nombre: { [op.like]: buscado } },
          { descripcion: { [op.like]: buscado } }
        ]
      },
      include: ['comentarios', 'usuario']
    }).then(function(resultados) {
      let respuesta = null;
      if (resultados.length === 0) {
        respuesta = "No hay resultados para su criterio de búsqueda";
      }
      return res.render('search-results', {
        resultados: resultados,
        respuesta: respuesta,
        buscado: req.query.buscado
      });
    }).catch(function(error) {
      return res.send(error);
    });
  },
    agregarProductos: function(req,res){
      const usuarioLogeado = usuarios.usuario;
      return res.render('product-add', {usuarioLogeado: usuarioLogeado});
    }
 };
 
 
 module.exports = productController;
