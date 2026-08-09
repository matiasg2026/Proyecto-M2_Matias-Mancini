SET client_encoding = 'UTF8';



INSERT INTO authors (name, email) VALUES
('Juan Perez', 'juan@email.com'),
('Ana Gomez', 'ana@email.com');


INSERT INTO posts (author_id, title, content) VALUES
(1, 'Mi primer post', 'Esta es mi primera publicacion en el blog.'),
(2, 'Aprendiendo Backend', 'Estoy practicando Node.js, Express y PostgreSQL.');