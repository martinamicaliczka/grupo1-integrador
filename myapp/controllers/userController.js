const data = require('../db/db'); 
const usuarios = data.usuarios;
const productos = data.productos;
const comentarios = data.comentarios;
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
                let username = req.body.username;
                let email = req.body.email;
                let password = req.body.password;
        
                // guardar el usuario
                let usuario = {
                    name: username,
                    email: email,
                    password: bcryptjs.hashSync(password, 10)
                }
        
                db.User.create(usuario)
                    .then(function(results) {
                        return res.redirect("/")
                    })
                    .catch(function(err) {
                        return res.send(err)
                    })
    }
};

module.exports = userController;