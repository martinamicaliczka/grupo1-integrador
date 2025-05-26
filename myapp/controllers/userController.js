const db = require('../database/models');
const bcryptjs = require("bcryptjs");
const userController = {
    login: function (req, res) {
        return res.render('login')
    },
    register: function (req, res) {
        return res.render('register')
    },
    profile: function (req, res) {
        const usuarioLogeado = usuarios.usuario;
        const email = usuarios.email;
        const foto = usuarios.fotoPerfil;
        return res.render('profile', {usuarioLogeado: usuarioLogeado,
            email:email,
            foto:foto,
            productos: productos,
            comentarios: comentarios
        });
    },
    edit: function (req, res) {
        return res.render('profile-edit')
    }, 
    create: function(req,res){
        //return res.send(req.body)
          // recuperar los datos del form
                let usuario = req.body.usuario;
                let email = req.body.email;
                let password = req.body.contrasenia;
                let fechaNacimiento = req.body.fecha;
                let dni = req.body.dni;
                let fotoPerfil = req.body.fotoPerfil;
        
                // guardar el usuario
                let userNew = {
                    name: usuario,
                    email: email,
                    password: bcryptjs.hashSync(password, 10),
                    fechaNacimiento: fechaNacimiento,
                    dni: dni,
                    fotoPerfil: fotoPerfil
                }
                //return res.send(userNew)
                db.Usuario.create(userNew)
                    .then(function(results) {
                        return res.redirect("/")
                    })
                    .catch(function(err) {
                        return res.send(err)
                    })
    }
};

module.exports = userController;