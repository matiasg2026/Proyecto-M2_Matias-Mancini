MiniBlog API

API REST desarrollada con Node.js, Express y PostgreSQL para gestionar autores y publicaciones de un MiniBlog.

El proyecto implementa operaciones CRUD para las entidades authors y posts, validaciones de datos, manejo centralizado de errores, tests automatizados y documentación mediante OpenAPI.

🔗 Enlaces del proyecto

**Repositorio de GitHub:**  
[Proyecto M2 - GitHub](https://github.com/matiasg2026/Proyecto-M2_Matias-Mancini)

**API desplegada en Railway:**  
[MiniBlog API - Railway](https://proyecto-m2matias-mancini-production.up.railway.app)

**API local:**  
[http://localhost:3001](http://localhost:3001)


👨‍💻 Autor

Matias Mancini

Proyecto desarrollado como parte del Proyecto M2 - Backend.

📋 Descripción del proyecto

MiniBlog API permite:

Crear, consultar, actualizar y eliminar autores.
Crear, consultar, actualizar y eliminar publicaciones.
Consultar publicaciones asociadas a un autor.
Validar los datos recibidos mediante middlewares.
Gestionar errores HTTP mediante un middleware global.
Persistir la información utilizando PostgreSQL.
Ejecutar tests automatizados con Vitest y Supertest.
Consultar la documentación de la API mediante OpenAPI.

🛠️ Tecnologías utilizadas

Node.js
Express
PostgreSQL
pg
Vitest
Supertest
dotenv
OpenAPI 3.0.3
Swagger

📁 Estructura del proyecto

```text

proyecto-m2_matias-mancini/
│
├── docs/
│   ├── prompts/
│   │   ├── Imagen01.png
│   │   ├── Imagen02.png
│   │   ├── ...
│   │   └── Imagen19.png
│   │
│   └── openapi.yaml
│
├── sql/
│   ├── schema.sql
│   └── seed.sql
│
├── src/
│   ├── controllers/
│   │   ├── authorsController.js
│   │   └── postsController.js
│   │
│   ├── db/
│   │   └── db.js
│   │
│   ├── helpers/
│   │   └── validators.js
│   │
│   ├── middlewares/
│   │   ├── errorHandler.js
│   │   ├── validateAuthor.js
│   │   └── validatePost.js
│   │
│   ├── routes/
│   │   ├── authors.js
│   │   └── posts.js
│   │
│   ├── services/
│   │   ├── authorsService.js
│   │   └── postsService.js
│   │
│   ├── app.js
│   └── server.js
│
├── tests/
│   ├── authors.test.js
│   └── posts.test.js
│
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── vitest.config.js ```

💻 Ejecución local

Requisitos

Antes de ejecutar el proyecto es necesario tener instalado:

Node.js
npm
PostgreSQL
Git

1. Clonar el repositorio
git clone https://github.com/matiasg2026/Proyecto-M2_Matias-Mancini.git
cd Proyecto-M2_Matias-Mancini

2. Instalar las dependencias

Desde la carpeta raíz del proyecto:

npm install

3. Configurar las variables de entorno

Crear un archivo `.env` en la raíz del proyecto.

Ejemplo:

PORT=3001
DATABASE_PUBLIC_URL=postgresql://usuario:password@host:puerto/base_de_datos

Reemplazar los valores de la URL por los correspondientes a la base de datos PostgreSQL.

El archivo `.env` contiene información sensible y no debe subirse al repositorio.

El proyecto incluye un archivo `.env.example` como referencia para configurar las variables necesarias.

🗄️ Base de datos

La aplicación utiliza PostgreSQL.

La base de datos utilizada localmente es:

miniblog
Setup SQL

El archivo:

sql/schema.sql

contiene las instrucciones necesarias para crear las tablas authors y posts, incluyendo:

Claves primarias.
Clave foránea.
Restricciones NOT NULL.
Restricción UNIQUE.
Relación entre autores y publicaciones.

Para ejecutar el setup desde PostgreSQL:

psql -U postgres -d miniblog -f sql/schema.sql
Seed SQL

El archivo:

sql/seed.sql

contiene datos iniciales para realizar pruebas de la aplicación.

Para ejecutar el seed:

psql -U postgres -d miniblog -f sql/seed.sql
Principales tablas
Authors
Campo	Tipo
id	INTEGER
name	VARCHAR
email	VARCHAR
bio	TEXT
created_at	TIMESTAMP
Posts
Campo	Tipo
id	INTEGER
author_id	INTEGER
title	VARCHAR
content	TEXT
published	BOOLEAN
created_at	TIMESTAMP

La columna posts.author_id mantiene la relación con authors.id.

▶️ Ejecutar la aplicación
Modo desarrollo
npm run dev
Modo normal
npm start

Por defecto, la aplicación se ejecuta en:

http://localhost:3001

🧪 Tests

El proyecto utiliza Vitest y Supertest para realizar pruebas automatizadas sobre los endpoints.

Para ejecutar los tests:

npm test

Actualmente existen 12 tests automatizados, todos funcionando correctamente.

Tests de Authors
Rechazo de author sin nombre.
Rechazo de email inválido.
Rechazo de email duplicado.
Creación correcta de un author.
Obtención de todos los authors.
Obtención de un author por ID.
Respuesta 404 cuando el author no existe.
Eliminación correcta de un author.
Tests de Posts
Rechazo de post sin author_id.
Rechazo de post con título vacío.
Rechazo de post con contenido vacío.
Creación correcta de un post.

Resultado actual:

Test Files: 2 passed
Tests:      12 passed

📚 Documentación OpenAPI

La API está documentada utilizando OpenAPI 3.0.3.

El archivo se encuentra en:

docs/openapi.yaml

La documentación incluye:

Endpoints.
Parámetros.
Request bodies.
Respuestas.
Códigos HTTP.
Schemas.
Errores de validación.

Los endpoints están organizados mediante tags en:

Authors
Posts

El archivo puede abrirse utilizando una herramienta compatible con OpenAPI/Swagger, como Swagger Editor o Swagger UI.

🔗 Endpoints principales

Authors
Método	Endpoint	Descripción
GET	/authors	Obtener todos los autores
GET	/authors/:id	Obtener un autor por ID
POST	/authors	Crear un autor
PUT	/authors/:id	Actualizar un autor
DELETE	/authors/:id	Eliminar un autor
Posts
Método	Endpoint	Descripción
GET	/posts	Obtener todos los posts
GET	/posts/:id	Obtener un post por ID
GET	/posts/author/:authorId	Obtener posts de un autor
POST	/posts	Crear un post
PUT	/posts/:id	Actualizar un post
DELETE	/posts/:id	Eliminar un post

✅ Validaciones

La API cuenta con validaciones mediante middlewares.

Authors

Se valida:

Nombre obligatorio.
Nombre como texto.
Nombre no vacío.
Email obligatorio.
Formato válido del email.
Email único.
Posts

Se valida:

author_id obligatorio.
author_id como número entero.
Título obligatorio.
Título como texto.
Título no vacío.
Contenido obligatorio.
Contenido como texto.
Contenido no vacío.
Existencia del author antes de crear o actualizar un post.

Los errores de validación utilizan el código:

400 Bad Request

Cuando se intenta utilizar un author inexistente para un post, la API responde:

404 Not Found

Ejemplo de error:

{
  "error": "El título no puede estar vacío"
}

🚂 Deployment en Railway

La aplicación está desplegada en Railway y conectada a una instancia de PostgreSQL.

API pública

La API puede ser utilizada desde:

https://proyecto-m2matias-mancini-production.up.railway.app

Base de datos

La aplicación utiliza PostgreSQL alojado en Railway.

La conexión se configura mediante variables de entorno proporcionadas por Railway.

Las credenciales reales no se encuentran almacenadas en el repositorio.

Endpoints de producción
Obtener todos los autores

GET /authors

Obtener todos los posts

GET /posts

🤖 Registro del uso de IA

Durante el desarrollo del proyecto se utilizó inteligencia artificial como herramienta de apoyo.

La IA fue utilizada principalmente para:

Resolver errores de sintaxis y configuración.
Comprender conceptos relacionados con Express y Node.js.
Revisar la organización de la arquitectura del proyecto.
Obtener orientación para separar responsabilidades entre routes, controllers, services y middlewares.
Diseñar y revisar validaciones.
Crear y revisar tests utilizando Vitest y Supertest.
Documentar los endpoints mediante OpenAPI.
Revisar errores encontrados durante el desarrollo.

El código fue implementado, probado y revisado durante el desarrollo del proyecto, utilizando la IA como herramienta de asistencia y aprendizaje.

📸 Prompts utilizados durante el desarrollo

Como parte del registro del uso de inteligencia artificial, se incluyen las capturas de los prompts utilizados durante el desarrollo del proyecto.

Las imágenes se encuentran almacenadas en:

docs/prompts/

### Prompt 1

![Prompt 1](./docs/prompts/Imagen01.png)

### Prompt 2

![Prompt 2](./docs/prompts/Imagen02.png)

### Prompt 3

![Prompt 3](./docs/prompts/Imagen03.png)

### Prompt 4

![Prompt 4](./docs/prompts/Imagen04.png)

### Prompt 5

![Prompt 5](./docs/prompts/Imagen05.png)

### Prompt 6

![Prompt 6](./docs/prompts/Imagen06.png)

### Prompt 7

![Prompt 7](./docs/prompts/Imagen07.png)

### Prompt 8

![Prompt 8](./docs/prompts/Imagen08.png)

### Prompt 9

![Prompt 9](./docs/prompts/Imagen09.png)

### Prompt 10

![Prompt 10](./docs/prompts/Imagen10.png)

### Prompt 11

![Prompt 11](./docs/prompts/Imagen11.png)

### Prompt 12

![Prompt 12](./docs/prompts/Imagen12.png)

### Prompt 13

![Prompt 13](./docs/prompts/Imagen13.png)

### Prompt 14

![Prompt 14](./docs/prompts/Imagen14.png)

### Prompt 15

![Prompt 15](./docs/prompts/Imagen15.png)

### Prompt 16

![Prompt 16](./docs/prompts/Imagen16.png)

### Prompt 17

![Prompt 17](./docs/prompts/Imagen17.png)

### Prompt 18

![Prompt 18](./docs/prompts/Imagen18.png)

### Prompt 19

![Prompt 19](./docs/prompts/Imagen19.png)