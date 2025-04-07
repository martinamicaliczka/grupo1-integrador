CREATE SCHEMA proyectoIntegradorG1;
USE proyectoIntegradorG1;
CREATE TABLE usuarios(
		id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
        email VARCHAR(250) NOT NULL UNIQUE,
        contrasenia VARCHAR(500) NOT NULL,
        fecha DATE NOT NULL,
        dni INT NOT NULL,
        foto VARCHAR(300),
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        deletedAt  TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP 
);
INSERT INTO usuarios VALUES(
DEFAULT,
'brian@digitalhouse.com',
'1234',
'2005-08-23',
'46956088',
'foto.png',
null,
null,
null
),
(
DEFAULT,
'luis@digitalhouse.com',
'4567',
'2018-10-14',
'23067425',
'foto1.png',
null,
null,
null
),
(
DEFAULT,
'martu@digitalhouse.com',
'hola123',
'2011-02-17',
'12345678',
'foto2.png',
null,
null,
null
),
(
DEFAULT,
'lola@digitalhouse.com',
'lolatequiero',
'2006-01-30',
'47131107',
'foto3.png',
null,
null,
null
),
(
DEFAULT,
'ema@digitalhouse.com',
'emaloveb',
'2005-11-21',
'46915540',
'foto4.png',
null,
null,
null
);