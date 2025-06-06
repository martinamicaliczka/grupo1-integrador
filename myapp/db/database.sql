CREATE SCHEMA proyectoIntegradorG1;
USE proyectoIntegradorG1;

CREATE TABLE usuarios(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	email VARCHAR(250) NOT NULL UNIQUE,
	username VARCHAR(250) NOT NULL,
	contrasenia VARCHAR(500) NOT NULL,
	fecha DATE NOT NULL,
	dni INT NOT NULL,
	foto VARCHAR(300),
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO usuarios VALUES
(DEFAULT, 'brian@digitalhouse.com', 'brian', '1234', '2005-08-23', '46956088', 'foto.png', NULL, NULL, NULL),
(DEFAULT, 'luis@digitalhouse.com', 'luis', '4567', '2018-10-14', '23067425', 'foto1.png', NULL, NULL, NULL),
(DEFAULT, 'martu@digitalhouse.com', 'martu', 'hola123', '2011-02-17', '12345678', 'foto2.png', NULL, NULL, NULL),
(DEFAULT, 'lola@digitalhouse.com', 'lola', 'lolatequiero', '2006-01-30', '47131107', 'foto3.png', NULL, NULL, NULL),
(DEFAULT, 'ema@digitalhouse.com', 'ema', 'emaloveb', '2005-11-21', '46915540', 'foto4.png', NULL, NULL, NULL);

CREATE TABLE productos (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    imagenProducto VARCHAR(255) NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    idUsuario INT UNSIGNED,
    FOREIGN KEY (idUsuario) REFERENCES usuarios(id)
);

INSERT INTO productos VALUES
(DEFAULT, "img-funda1.jpg", "Funda Arcoiris", "Funda de silicona arcoiris, flexible y suave al tacto. Ofrece una excelente protección contra golpes y rayones, mientras le da a tu dispositivo un look moderno y divertido.", NULL, NULL, NULL, 1),
(DEFAULT, "img-funda2.jpg", "Funda Aurora Pastel", "Elegante funda de silicona con acabado mate y diseño degradado en tonos pastel. Suave al tacto, flexible y resistente, ideal para proteger tu celular con estilo y personalidad.", NULL, NULL, NULL, 3),
(DEFAULT, "img-funda3.jpg", "Funda Mármol Rosado Luxe", "Diseño de mármol rosado con brillos. Elegante, flexible y suave al tacto.", NULL, NULL, NULL, 5),
(DEFAULT, "img-funda4.jpg", "Funda Glam Rosa Mirror", "Funda con glitter rosa y espejo. Moderna, llamativa y súper elegante.", NULL, NULL, NULL, 2),
(DEFAULT, "img-funda5.jpg", "Funda Glitter Crystal", "Funda transparente con glitter holográfico. Divertida, brillante y delicada.", NULL, NULL, NULL, 4),
(DEFAULT, "img-funda6.jpg", "Funda Estelar Glitter", "Funda negra con estrellas brillantes. Original, mágica y súper llamativa.", NULL, NULL, NULL, 1),
(DEFAULT, "img-funda7.jpg", "Funda Green Sparkle", "Funda verde con estrellas brillantes y mucho glitter!. Original, mágica y súper llamativa.", NULL, NULL, NULL, 5),
(DEFAULT, "img-funda8.jpg", "Funda Butterfly Dream", "Funda transparente con mariposas violetas. Delicada, fresca y encantadora.", NULL, NULL, NULL, 3),
(DEFAULT, "img-funda9.jpg", "Funda Street-Style", "Funda transparente con un collage de tickets y distintos simbolos. Delicada, cool y unica.", NULL, NULL, NULL, 2),
(DEFAULT, "img-funda10.jpg", "Funda Love Contrast", "Funda con corazones rosas y negros. Divertida, moderna y con estilo único.", NULL, NULL, NULL, 1);

CREATE TABLE comentarios (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	idProducto INT UNSIGNED NOT NULL,
	idUsuario INT UNSIGNED NOT NULL,
	comentario TEXT NOT NULL,
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
	FOREIGN KEY (idProducto) REFERENCES productos(id),
	FOREIGN KEY (idUsuario) REFERENCES usuarios(id)
);

INSERT INTO comentarios VALUES
(DEFAULT, 1, 1, '¡La funda es hermosa! Me encantó.', NULL, NULL, NULL),
(DEFAULT, 1, 2, 'Me gustó, aunque esperaba otro material.', NULL, NULL, NULL), 
(DEFAULT, 1, 3, 'Llegó rápido y en buen estado.', NULL, NULL, NULL),
(DEFAULT, 2, 4, 'Colores hermosos, muy buena calidad.', NULL, NULL, NULL),
(DEFAULT, 2, 5, 'Es tal cual la foto, ¡recomiendo!', NULL, NULL, NULL),
(DEFAULT, 2, 1, 'Un poco fina, pero linda igual.', NULL, NULL, NULL),
(DEFAULT, 3, 2, 'Muy elegante.', NULL, NULL, NULL),
(DEFAULT, 3, 3, 'La textura es muy suave.', NULL, NULL, NULL),
(DEFAULT, 3, 4, 'Mi funda favorita hasta ahora.', NULL, NULL, NULL),
(DEFAULT, 4, 5, 'Me encanta el brillo y el espejo.', NULL, NULL, NULL),
(DEFAULT, 4, 1, 'Ideal para selfies con el espejo.', NULL, NULL, NULL),
(DEFAULT, 4, 2, 'Un diseño muy original.', NULL, NULL, NULL),
(DEFAULT, 5, 2, 'Un diseño muy original.', NULL, NULL, NULL),
(DEFAULT, 5, 3, 'El glitter no se cae, excelente.', NULL, NULL, NULL),
(DEFAULT, 5, 5, 'Muy bonita y delicada.', NULL, NULL, NULL),
(DEFAULT, 6, 1, 'Perfecta para la noche, mágica.', NULL, NULL, NULL),
(DEFAULT, 6, 2, 'Muy original, todos me preguntan dónde la compré.', NULL, NULL, NULL),
(DEFAULT, 6, 3, '¡10 puntos! No decepciona.', NULL, NULL, NULL),
(DEFAULT, 7, 4, 'Me fascina el diseño con estrellas.', NULL, NULL, NULL),
(DEFAULT, 7, 5, 'Es más linda en persona.', NULL, NULL, NULL),
(DEFAULT, 7, 1, 'Muy recomendada.', NULL, NULL, NULL),
(DEFAULT, 8, 2, 'Las mariposas se ven muy reales.', NULL, NULL, NULL),
(DEFAULT, 8, 3, 'Hermoso diseño, parece de arte.', NULL, NULL, NULL),
(DEFAULT, 8, 4, 'Muy delicada, me encanta.', NULL, NULL, NULL),
(DEFAULT, 9, 5, 'Estilo urbano, justo lo que buscaba.', NULL, NULL, NULL),
(DEFAULT, 9, 1, 'Muy original y distinta.', NULL, NULL, NULL),
(DEFAULT, 9, 2, 'Me re gustó, ¡gracias!', NULL, NULL, NULL),
(DEFAULT, 10, 3, 'Diseño moderno, me encantó.', NULL, NULL, NULL),
(DEFAULT, 10, 4, 'Los corazones son un toque genial.', NULL, NULL, NULL),
(DEFAULT, 10, 5, 'Perfecta para regalar.', NULL, NULL, NULL);