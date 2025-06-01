const db = require('../database/models'); 
const producto = db.Producto;
const op = db.Sequelize.Op;

const productController = {
   product: function (req, res) {
      const idBuscado = req.params.id;
      db.Producto.findAll({
        include: [
          { association: 'usuario' },
          {
            association: 'comentarios',
            include: [{ association: 'usuario' }]
          }
        ]
      })
      .then(function (productos) {
        return res.render("product", {productos: productos, idBuscado: idBuscado});
      })
      .catch(function (error) {
        return res.send(error);
      });
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
      const usuarioLogueado = req.session.usuarioLogueado;
      
      return res.render('product-add', {usuarioLogueado: usuarioLogueado});
      
    },
    guardarProductos: function(req, res){
       if (!req.session.usuarioLogueado) {
        return res.redirect("/users/login");
      }
      const nombre = req.body.nombreProducto;
      const descripcion= req.body.descripcion;
      const imagenProducto= req.body.image ;
      const idUsuario = req.session.usuarioLogueado.id;

      let newProduct = {nombre: nombre, descripcion: descripcion, imagenProducto: imagenProducto, idUsuario: idUsuario}

        db.Producto.create(newProduct)
        .then(function(){
          return res.redirect("/");
        })
        .catch(function(error){
          cosole.log(error)
          return res.send("ocurrio un error al guardar el producto")
        });
    },
    nuevoComentario:function (req, res) {
      if (!req.session.usuarioLogueado) {
        return res.redirect("/users/login");
      }
      else {
        db.Comentario.create({
          idProducto: req.body.idProducto,
          idUsuario: req.session.usuarioLogueado.id,
          comentario: req.body.comentario,
      })
      .then(function () {
        return res.redirect("/product/" + req.body.idProducto);
    })
    .catch(function (err) {
        return res.send(err);
    });
    }
  }
 };
 
 
 module.exports = productController;
