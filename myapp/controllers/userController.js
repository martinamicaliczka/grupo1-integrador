const data = require('../db/db'); 
const usuarios = data.usuarios;
const productos = data.productos;
const comentarios = data.comentarios;
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
          // recuperar los datos del form
                let usuario = req.body.usuario;
                let email = req.body.email;
                let password = req.body.contrasenia;
                let fechaNacimiento = req.body.fechaNacimiento;
                let nroDocumento = req.body.nroDocumento;
                let fotoPerfil = req.body.fotoPerfil;
        
                // guardar el usuario
                let username = {
                    name: usuario,
                    email: email,
                    password: bcryptjs.hashSync(password, 10),
                    fechaNacimiento: fechaNacimiento,
                    nroDocumento: nroDocumento,
                    fotoPerfil: fotoPerfil
                }
        
                data.usuarios.create(username)
                    .then(function(results) {
                        return res.redirect("/")
                    })
                    .catch(function(err) {
                        return res.send(err)
                    })
    }
};

module.exports = userController;