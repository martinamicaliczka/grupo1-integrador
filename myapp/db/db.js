//modulo de datos// 
//preguntar si es un usuario o se ponen todos//
const usuarios = [
    {
      email: "brian@digitalhouse.com",
      usuario: "brian",
      contrasenia: "1234",
      fechaNacimiento: "2005-08-23",
      nroDocumento: "46956088",
      fotoPerfil: "/images/users/foto.png"
    }
  ];
  const logIn = {
    login: false,
    usuarioLog: null,
  };

module.exports = {
    usuarios, 
    logIn};

