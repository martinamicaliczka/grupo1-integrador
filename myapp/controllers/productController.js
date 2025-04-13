const data = require('../db/db'); 
const usuarios = data.usuarios;
const productos = data.productos;
const productController = {
   product: function (req, res) {
      let idBuscado = req.params.brand;
      return res.send('product', {id:idBuscado})
   },
   homeProduct: function(req,res){
      return res.render('product', {productos: data.productos})
   },
    results: function (req, res) {
      const nombreProducto = productos[0].nombre;
      const descripcionProducto = productos[0].descripcion;
      const imgProducto = productos[0].imagenProducto;
      return res.render('search-results', {nombreProducto, descripcionProducto, imgProducto});
    },

    agregarProductos: function(req,res){
      const usuarioLogeado = usuarios.usuario;
      return res.render('product-add', {usuarioLogeado});
    }
 };
 
 
 module.exports = productController;
