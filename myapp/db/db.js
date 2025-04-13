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
      imagenProducto: "img-funda1.jpg",
      nombre: "Funda Arcoiris",
      descripcion: "Funda de silicona arcoiris, flexible y suave al tacto. Ofrece una excelente protección contra golpes y rayones, mientras le da a tu dispositivo un look moderno y divertido.",
      usuario_id: 1
    },
    {
      id: 2,
      imagenProducto: "img-funda2.jpg",
      nombre: "Funda Aurora Pastel",
      descripcion: "Elegante funda de silicona con acabado mate y diseño degradado en tonos pastel. Suave al tacto, flexible y resistente, ideal para proteger tu celular con estilo y personalidad.",
      usuario_id: 3
    },
    {
      id: 3,
      imagenProducto: "img-funda3.jpg",
      nombre: "Funda Mármol Rosado Luxe",
      descripcion: "Diseño de mármol rosado con brillos. Elegante, flexible y suave al tacto.",
      usuario_id: 5
    },
    {
      id: 4,
      imagenProducto: "img-funda4.jpg",
      nombre: "Funda Glam Rosa Mirror",
      descripcion: "Funda con glitter rosa y espejo. Moderna, llamativa y súper elegante.",
      usuario_id: 2
    },
    {
      id: 5,
      imagenProducto: "img-funda5.jpg",
      nombre: "Funda Glitter Crystal",
      descripcion: "Funda transparente con glitter holográfico. Divertida, brillante y delicada.",
      usuario_id: 4
    },
    {
      id: 6,
      imagenProducto: "img-funda6.jpg",
      nombre: "Funda Estelar Glitter",
      descripcion: "Funda negra con estrellas brillantes. Original, mágica y súper llamativa.",
      usuario_id: 1
    },
    {
      id: 7,
      imagenProducto: "img-funda7.jpg",
      nombre: "Funda Green Sparkle",
      descripcion: "Funda verde con estrellas brillantes y mucho glitter!. Original, mágica y súper llamativa.",
      usuario_id: 5
    },
    {
      id: 8,
      imagenProducto: "img-funda8.jpg",
      nombre: "Funda Butterfly Dream",
      descripcion: "Funda transparente con mariposas violetas. Delicada, fresca y encantadora.",
      usuario_id: 3
    },
    {
      id: 9,
      imagenProducto: "img-funda9.jpg",
      nombre: "Funda Street-Style",
      descripcion: "Funda transparente con un collage de tickets y distintos simbolos. Delicada, cool y unica.",
      usuario_id: 2
    },
    {
      id: 10,
      imagenProducto: "img-funda10.jpg",
      nombre: "Funda Love Contrast",
      descripcion: "Funda con corazones rosas y negros. Divertida, moderna y con estilo único.",
      usuario_id: 1
    }
  ],
  comentarios : [
    { id: 1, id_producto: 1, id_usuario: 1, comentario: "¡La funda es hermosa! Me encantó." },
    { id: 2, id_producto: 1, id_usuario: 2, comentario: "Me gustó, aunque esperaba otro material." },
    { id: 3, id_producto: 1, id_usuario: 3, comentario: "Llegó rápido y en buen estado." },
    { id: 4, id_producto: 2, id_usuario: 4, comentario: "Colores hermosos, muy buena calidad." },
    { id: 5, id_producto: 2, id_usuario: 5, comentario: "Es tal cual la foto, ¡recomiendo!" },
    { id: 6, id_producto: 2, id_usuario: 1, comentario: "Un poco fina, pero linda igual." },
    { id: 7, id_producto: 3, id_usuario: 2, comentario: "Muy elegante." },
    { id: 8, id_producto: 3, id_usuario: 3, comentario: "La textura es muy suave." },
    { id: 9, id_producto: 3, id_usuario: 4, comentario: "Mi funda favorita hasta ahora." },
    { id: 10, id_producto: 4, id_usuario: 5, comentario: "Me encanta el brillo y el espejo." },
    { id: 11, id_producto: 4, id_usuario: 1, comentario: "Ideal para selfies con el espejo." },
    { id: 12, id_producto: 4, id_usuario: 2, comentario: "Un diseño muy original." },
    { id: 13, id_producto: 5, id_usuario: 2, comentario: "Un diseño muy original." },
    { id: 14, id_producto: 5, id_usuario: 3, comentario: "El glitter no se cae, excelente." },
    { id: 15, id_producto: 5, id_usuario: 5, comentario: "Muy bonita y delicada." },
    { id: 16, id_producto: 6, id_usuario: 1, comentario: "Perfecta para la noche, mágica." },
    { id: 17, id_producto: 6, id_usuario: 2, comentario: "Muy original, todos me preguntan dónde la compré." },
    { id: 18, id_producto: 6, id_usuario: 3, comentario: "¡10 puntos! No decepciona." },
    { id: 19, id_producto: 7, id_usuario: 4, comentario: "Me fascina el diseño con estrellas." },
    { id: 20, id_producto: 7, id_usuario: 5, comentario: "Es más linda en persona." },
    { id: 21, id_producto: 7, id_usuario: 1, comentario: "Muy recomendada." },
    { id: 22, id_producto: 8, id_usuario: 2, comentario: "Las mariposas se ven muy reales." },
    { id: 23, id_producto: 8, id_usuario: 3, comentario: "Hermoso diseño, parece de arte." },
    { id: 24, id_producto: 8, id_usuario: 4, comentario: "Muy delicada, me encanta." },
    { id: 25, id_producto: 9, id_usuario: 5, comentario: "Estilo urbano, justo lo que buscaba." },
    { id: 26, id_producto: 9, id_usuario: 1, comentario: "Muy original y distinta." },
    { id: 27, id_producto: 9, id_usuario: 2, comentario: "Me re gustó, ¡gracias!" },
    { id: 28, id_producto: 10, id_usuario: 3, comentario: "Diseño moderno, me encantó." },
    { id: 29, id_producto: 10, id_usuario: 4, comentario: "Los corazones son un toque genial." },
    { id: 30, id_producto: 10, id_usuario: 5, comentario: "Perfecta para regalar." }
  ] 
};

module.exports = dataebase;

