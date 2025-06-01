const db = require('../database/models');
const bcryptjs = require("bcryptjs");

const userController = {
    login: function (req, res) {
        if (req.session.usuarioLogeado) {
            return res.redirect('/users/profile');
        }
        return res.render('login', {msg: null});
        },
        
        loginProcess: function (req, res) {
            db.Usuario.findOne({
                where: { email: req.body.email }
            }).then(function(user) {
                if (!user) {
                    return res.render('login', {msg: 'El email no está registrado'});
                }
                if (!bcryptjs.compareSync(req.body.contrasenia, user.contrasenia)) {
                    return res.render('login', { msg: 'La contraseña es incorrect '});
                }
                req.session.usuarioLogeado = user;

                if (req.body.recordame != undefined) {
                    res.cookie('recordame', user.email, { maxAge: 600000 }); // 10 min
                }

            return res.redirect('/users/profile');
        });
    },

    logout: function (req, res) {
    res.clearCookie('recordame');
    req.session.destroy();
    return res.redirect('/');
},

  register: function (req, res) {
    if(req.session.usuarioLogeado){
        return res.redirect('/users/profile');
    }
    return res.render('register', {error:null});
  },

  profile: function (req, res) {
    if (!req.session.usuarioLogeado) {
      return res.redirect("/users/login");
    }
  
    const idUsuario = req.session.usuarioLogeado.id;
  
    db.Usuario.findByPk(idUsuario, {
      include: [{ association: 'productos' }]
    })
    .then(function(usuario) {
      return res.render('profile', {
        usuario: usuario,
        productos: usuario.productos,
        totalProductos: usuario.productos.length
      });
    })
    .catch(function(error) {
      return res.send(error);
    });
  },

  edit: function (req, res) {
    return res.render('profile-edit');
  },

  create: function (req, res) {
    const email = req.body.email;
    const usuario = req.body.usuario;
    const password = req.body.contrasenia;
    const fechaNacimiento = req.body.fecha;
    const dni = req.body.dni;
    const fotoPerfil = req.body.fotoPerfil;

    db.Usuario.findOne({ where: { email: email } })
      .then(function (usuarioExistente) {
        if (usuarioExistente) {
          return res.render('register', { error: 'Ese email ya está ingresado' });
        }

        // Validar si el mail está vacío
        if (email === '') {
          return res.render('register', { error: 'Debés ingresar un mail' });
        }

        // Validar si la contraseña tiene al menos 3 caracteres
        if (password.length < 3) {
          return res.render('register', { error: 'La contraseña debe tener al menos 3 caracteres' });
        }

        // Crear usuario nuevo
        let userNew = {
            username: usuario,
            email: email,
            contrasenia: bcryptjs.hashSync(password, 10),
            fecha: fechaNacimiento,
            dni: dni,
            foto: fotoPerfil,
        };

        db.Usuario.create(userNew)
          .then(function (results) {
            return res.redirect("/");
          })
          .catch(function (err) {
            return res.send(err);
          });
      })
      .catch(function (err) {
        return res.send(err);
      });
  },
  public: function(req, res){
    const userBuscado = req.params.user;
    db.Usuario.findOne({
        where: { username: userBuscado },
        include: [
          {association: 'producto',
            include: ['comentarios']}]
      })
      .then(function(usuario) {
        if (!usuario) {
            return res.send("Lo siento, no econtramos el usuario que tu buscas");
        } else {
            return res.render('profile', {
          usuario: userBuscado,
          productos: userBuscado.productos,
          totalProductos: userBuscado.productos.length
        });
        }
        
      })
      .catch(function (err) {
        return res.send(err);
      });
}
};

module.exports = userController;
