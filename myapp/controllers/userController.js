const db = require('../database/models');
const bcryptjs = require("bcryptjs");

const userController = {
  login: function (req, res) {
    return res.render('login');
  },

  register: function (req, res) {
    if(req.session.usuarioLogeado){
        return res.redirect('/users/profile');
    }
    return res.render('register', {error:null});
  },

  profile: function (req, res) {
    const usuarioLogeado = usuarios.usuario;
    const email = usuarios.email;
    const foto = usuarios.fotoPerfil;
    return res.render('profile', {
      usuarioLogeado: usuarioLogeado,
      email: email,
      foto: foto,
      productos: productos,
      comentarios: comentarios
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
          name: usuario,
          email: email,
          password: bcryptjs.hashSync(password, 10),
          fechaNacimiento: fechaNacimiento,
          dni: dni,
          fotoPerfil: fotoPerfil,
          created_at: new Date()
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
  }
};

module.exports = userController;
