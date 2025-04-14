const data = require('../db/db'); 
const usuarios = data.usuarios;
const productos = data.productos;
const comentarios = data.comentarios;

const productController = {
   product: function (req, res) {
      const nombreProducto = productos[0].nombre;
		const descripcionProducto = productos[0].descripcion;
		const imgProducto = productos[0].imagenProducto;
      const imgUsuario = usuarios.fotoPerfil;
      const nombreUsuario = usuarios.usuario;
      return res.render('product', {productos:productos, nombreProducto:nombreProducto, descripcionProducto:descripcionProducto,imgProducto:imgProducto, comentarios:comentarios, imgUsuario: imgUsuario, nombreUsuario:nombreUsuario})
   },
   homeProduct: function(req,res){
      return res.render('product')
   },
    results: function (req, res) {
      return res.render('search-results', {productos:productos, comentarios:comentarios});
    },

    agregarProductos: function(req,res){
      const usuarioLogeado = usuarios.usuario;
      return res.render('product-add', {usuarioLogeado: usuarioLogeado});
    }
 };
 
 
 module.exports = productController;
