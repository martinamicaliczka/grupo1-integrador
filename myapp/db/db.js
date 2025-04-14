//modulo de datos// 
//preguntar si es un usuario o se ponen todos//
const dataebase ={
    usuarios: 
    {
      email: "brian@digitalhouse.com",
      usuario: "Brian",
      contrasenia: "1234",
      fechaNacimiento: "2005-08-23",
      nroDocumento: "46956088",
      fotoPerfil: "/images/users/foto.png"
    },
 productos: [
    {
      id: 1,
      imagenProducto: "/images/products/img-funda1.jpg",
      nombre: "Funda Arcoiris",
      descripcion: "Funda de silicona arcoiris, flexible y suave al tacto. Ofrece una excelente protección contra golpes y rayones, mientras le da a tu dispositivo un look moderno y divertido.",
      usuario_id: 1
    },
    {
      id: 2,
      imagenProducto: "/images/products/img-funda2.jpg",
      nombre: "Funda Aurora Pastel",
      descripcion: "Elegante funda de silicona con acabado mate y diseño degradado en tonos pastel. Suave al tacto, flexible y resistente, ideal para proteger tu celular con estilo y personalidad.",
      usuario_id: 3
    },
    {
      id: 3,
      imagenProducto: "/images/products/img-funda3.jpg",
      nombre: "Funda Mármol Rosado Luxe",
      descripcion: "Diseño de mármol rosado con brillos. Elegante, flexible y suave al tacto.",
      usuario_id: 5
    },
    {
      id: 4,
      imagenProducto: "/images/products/img-funda4.jpg",
      nombre: "Funda Glam Rosa Mirror",
      descripcion: "Funda con glitter rosa y espejo. Moderna, llamativa y súper elegante.",
      usuario_id: 2
    },
    {
      id: 5,
      imagenProducto: "/images/products/img-funda5.jpg",
      nombre: "Funda Glitter Crystal",
      descripcion: "Funda transparente con glitter holográfico. Divertida, brillante y delicada.",
      usuario_id: 4
    },
    {
      id: 6,
      imagenProducto: "/images/products/img-funda6.jpg",
      nombre: "Funda Estelar Glitter",
      descripcion: "Funda negra con estrellas brillantes. Original, mágica y súper llamativa.",
      usuario_id: 1
    },
    {
      id: 7,
      imagenProducto: "/images/products/img-funda7.jpg",
      nombre: "Funda Green Sparkle",
      descripcion: "Funda verde con estrellas brillantes y mucho glitter!. Original, mágica y súper llamativa.",
      usuario_id: 5
    },
    {
      id: 8,
      imagenProducto: "/images/products/img-funda8.jpg",
      nombre: "Funda Butterfly Dream",
      descripcion: "Funda transparente con mariposas violetas. Delicada, fresca y encantadora.",
      usuario_id: 3
    },
    {
      id: 9,
      imagenProducto: "/images/products/img-funda9.jpg",
      nombre: "Funda Street-Style",
      descripcion: "Funda transparente con un collage de tickets y distintos simbolos. Delicada, cool y unica.",
      usuario_id: 2
    },
    {
      id: 10,
      imagenProducto: "/images/products/img-funda10.jpg",
      nombre: "Funda Love Contrast",
      descripcion: "Funda con corazones rosas y negros. Divertida, moderna y con estilo único.",
      usuario_id: 1
    }
  ],
  comentarios :  [
      {
        id_producto: 1,
        nombreUsuario: "brian@digitalhouse.com",
        textoComentario: "¡La funda es hermosa! Me encantó.",
        imagenPerfil: "/images/users/foto.png"
      },
      {
        id_producto: 1,
        nombreUsuario: "luis@digitalhouse.com",
        textoComentario: "Me gustó, aunque esperaba otro material.",
        imagenPerfil: "/images/users/foto1.png"
      },
      {
        id_producto: 1,
        nombreUsuario: "martu@digitalhouse.com",
        textoComentario: "Llegó rápido y en buen estado.",
        imagenPerfil: "/images/users/foto2.png"
      },
      {
        id_producto: 2,
        nombreUsuario: "lola@digitalhouse.com",
        textoComentario: "Colores hermosos, muy buena calidad.",
        imagenPerfil: "/images/users/foto3.png"
      },
      {
        id_producto: 2,
        nombreUsuario: "ema@digitalhouse.com",
        textoComentario: "Es tal cual la foto, ¡recomiendo!",
        imagenPerfil: "/images/users/foto4.png"
      },
      {
        id_producto: 2,
        nombreUsuario: "brian@digitalhouse.com",
        textoComentario: "Un poco fina, pero linda igual.",
        imagenPerfil: "/images/users/foto.png"
      },
      {
        id_producto: 3,
        nombreUsuario: "luis@digitalhouse.com",
        textoComentario: "Muy elegante.",
        imagenPerfil: "/images/users/foto1.png"
      },
      {
        id_producto: 3,
        nombreUsuario: "martu@digitalhouse.com",
        textoComentario: "La textura es muy suave.",
        imagenPerfil: "/images/users/foto2.png"
      },
      {
        id_producto: 3,
        nombreUsuario: "lola@digitalhouse.com",
        textoComentario: "Mi funda favorita hasta ahora.",
        imagenPerfil: "/images/users/foto3.png"
      },
      {
        id_producto: 4,
        nombreUsuario: "ema@digitalhouse.com",
        textoComentario: "Me encanta el brillo y el espejo.",
        imagenPerfil: "/images/users/foto4.png"
      },
      {
        id_producto: 4,
        nombreUsuario: "brian@digitalhouse.com",
        textoComentario: "Ideal para selfies con el espejo.",
        imagenPerfil: "/images/users/foto.png"
      },
      {
        id_producto: 4,
        nombreUsuario: "luis@digitalhouse.com",
        textoComentario: "Un diseño muy original.",
        imagenPerfil: "/images/users/foto1.png"
      },
      {
        id_producto: 5,
        nombreUsuario: "luis@digitalhouse.com",
        textoComentario: "Un diseño muy original.",
        imagenPerfil: "/images/users/foto1.png"
      },
      {
        id_producto: 5,
        nombreUsuario: "martu@digitalhouse.com",
        textoComentario: "El glitter no se cae, excelente.",
        imagenPerfil: "/images/users/foto2.png"
      },
      {
        id_producto: 5,
        nombreUsuario: "ema@digitalhouse.com",
        textoComentario: "Muy bonita y delicada.",
        imagenPerfil: "/images/users/foto4.png"
      },
      {
        id_producto: 6,
        nombreUsuario: "brian@digitalhouse.com",
        textoComentario: "Perfecta para la noche, mágica.",
        imagenPerfil: "/images/users/foto.png"
      },
      {
        id_producto: 6,
        nombreUsuario: "luis@digitalhouse.com",
        textoComentario: "Muy original, todos me preguntan dónde la compré.",
        imagenPerfil: "/images/users/foto1.png"
      },
      {
        id_producto: 6,
        nombreUsuario: "martu@digitalhouse.com",
        textoComentario: "¡10 puntos! No decepciona.",
        imagenPerfil: "/images/users/foto2.png"
      },
      {
        id_producto: 7,
        nombreUsuario: "lola@digitalhouse.com",
        textoComentario: "Me fascina el diseño con estrellas.",
        imagenPerfil: "/images/users/foto3.png"
      },
      {
        id_producto: 7,
        nombreUsuario: "ema@digitalhouse.com",
        textoComentario: "Es más linda en persona.",
        imagenPerfil: "/images/users/foto4.png"
      },
      {
        id_producto: 7,
        nombreUsuario: "brian@digitalhouse.com",
        textoComentario: "Muy recomendada.",
        imagenPerfil: "/images/users/foto.png"
      },
      {
        id_producto: 8,
        nombreUsuario: "luis@digitalhouse.com",
        textoComentario: "Las mariposas se ven muy reales.",
        imagenPerfil: "/images/users/foto1.png"
      },
      {
        id_producto: 8,
        nombreUsuario: "martu@digitalhouse.com",
        textoComentario: "Hermoso diseño, parece de arte.",
        imagenPerfil: "/images/users/foto2.png"
      },
      {
        id_producto: 8,
        nombreUsuario: "lola@digitalhouse.com",
        textoComentario: "Muy delicada, me encanta.",
        imagenPerfil: "/images/users/foto3.png"
      },
      {
        id_producto: 9,
        nombreUsuario: "ema@digitalhouse.com",
        textoComentario: "Estilo urbano, justo lo que buscaba.",
        imagenPerfil: "/images/users/foto4.png"
      },
      {
        id_producto: 9,
        nombreUsuario: "brian@digitalhouse.com",
        textoComentario: "Muy original y distinta.",
        imagenPerfil: "/images/users/foto.png"
      },
      {
        id_producto: 9,
        nombreUsuario: "luis@digitalhouse.com",
        textoComentario: "Me re gustó, ¡gracias!",
        imagenPerfil: "/images/users/foto1.png"
      },
      {
        id_producto: 10,
        nombreUsuario: "martu@digitalhouse.com",
        textoComentario: "Diseño moderno, me encantó.",
        imagenPerfil: "/images/users/foto2.png"
      },
      {
        id_producto: 10,
        nombreUsuario: "lola@digitalhouse.com",
        textoComentario: "Los corazones son un toque genial.",
        imagenPerfil: "/images/users/foto3.png"
      },
      {
        id_producto: 10,
        nombreUsuario: "ema@digitalhouse.com",
        textoComentario: "Perfecta para regalar.",
        imagenPerfil: "/images/users/foto4.png"
      }
    ]
    
};

module.exports = dataebase;

