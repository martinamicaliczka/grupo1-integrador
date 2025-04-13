const data = require('../db/db'); 
const usuarios = data.usuarios;
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
        return res.render('profile', {usuarioLogeado,
            email,
            foto,
        });
    },
    edit: function (req, res) {
        return res.render('profile-edit')
    }
};

module.exports = userController;