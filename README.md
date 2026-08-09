MiniBlog API

API REST desarrollada con Node.js, Express y PostgreSQL para gestionar autores y publicaciones de un MiniBlog.

El proyecto implementa operaciones CRUD para las entidades authors y posts, validaciones de datos, manejo de errores, tests automatizados y documentación mediante OpenAPI.

👨‍💻 Autor

Matias Mancini

Proyecto desarrollado como parte del Proyecto M2 - Backend.

Internal URL utilizada:

PENDIENTE_DE_COMPLETAR

📦 Entregable

Repositorio de GitHub:

PENDIENTE_DE_COMPLETAR

El enlace será agregado una vez publicado el proyecto en GitHub.

📋 Descripción del proyecto

MiniBlog API permite:

Crear, consultar, actualizar y eliminar autores.
Crear, consultar, actualizar y eliminar publicaciones.
Consultar publicaciones asociadas a un autor.
Validar los datos recibidos mediante middlewares.
Gestionar errores HTTP.
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
proyecto-m2_matias-mancini/
│
├── docs/
│   └── openapi.yaml
│
├── sql/
│   └── schema.sql
│    
├── src/
│   ├── controllers/
│   ├── helpers/
│   ├── middlewares/
│   ├── routes/
│   ├── services/
│   ├── app.js
│   ├── db.js
│   └── server.js
│
├── tests/
│   ├── authors.test.js
│   └── posts.test.js
│
├── .env
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
💻 Ejecución local
Requisitos

Antes de ejecutar el proyecto es necesario tener instalado:

Node.js
npm
PostgreSQL
Git
1. Clonar el repositorio
git clone URL_DEL_REPOSITORIO
cd proyecto-m2_matias-mancini

Reemplazar URL_DEL_REPOSITORIO por la URL del repositorio de GitHub.

2. Instalar las dependencias

Desde la carpeta raíz del proyecto:

npm install
3. Configurar las variables de entorno

Crear un archivo .env en la raíz del proyecto.

Ejemplo:

PORT=3001

DB_USER=postgres
DB_HOST=localhost
DB_NAME=miniblog
DB_PASSWORD=tu_password
DB_PORT=5432

Reemplazar tu_password por la contraseña correspondiente de PostgreSQL.

El archivo .env contiene información sensible y no debe subirse al repositorio.

El proyecto incluye un archivo .env.example como referencia para configurar las variables necesarias.

🗄️ Base de datos

La aplicación utiliza PostgreSQL.

La base de datos utilizada localmente es:

miniblog
Setup SQL

El archivo:

sql/schema.sql

contiene las instrucciones SQL necesarias para crear las tablas utilizadas por la aplicación.

Para ejecutar el setup desde PostgreSQL:

psql -U postgres -d miniblog -f sql/schema.sql

También puede ejecutarse utilizando la herramienta de PostgreSQL disponible en el entorno local.

Las principales tablas utilizadas son:

Authors
id
name
email
bio
created_at
Posts
id
author_id
title
content
published
created_at

posts.author_id mantiene la relación con authors.id.

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

Los tests actuales verifican diferentes comportamientos de la API.

Authors
Rechazo de author sin nombre.
Rechazo de email inválido.
Rechazo de email duplicado.
Creación correcta de un author.
Posts
Rechazo de post sin author_id.
Rechazo de post con título vacío.
Rechazo de post con contenido vacío.
Creación correcta de un post.
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

Los errores de validación utilizan el código:

400 Bad Request

Ejemplo:

{
  "error": "El título no puede estar vacío"
}
🚂 Deployment en Railway

La aplicación puede desplegarse utilizando Railway.

1. Crear el proyecto

Se debe crear un nuevo proyecto en Railway y conectar el repositorio de GitHub.

Railway utilizará el proyecto de Node.js para ejecutar la aplicación.

2. Configurar PostgreSQL

Dentro del proyecto de Railway se debe agregar una instancia de PostgreSQL.

Railway proporciona las variables necesarias para conectarse a la base de datos.

3. Variables de entorno

En el servicio de la aplicación se deben configurar las variables necesarias para la conexión.

Ejemplo:

PORT=3001
DB_USER=...
DB_HOST=...
DB_NAME=...
DB_PASSWORD=...
DB_PORT=5432

Los valores reales son proporcionados por Railway y no deben publicarse en este README.

4. Internal URL

Railway proporciona una Internal URL para la comunicación interna entre servicios del proyecto.

Esta URL puede utilizarse para que la aplicación se comunique con PostgreSQL dentro del entorno de Railway, según la configuración utilizada.

Internal URL utilizada:

PENDIENTE_DE_COMPLETAR


5. Public URL

Railway también proporciona una URL pública para acceder a la API desde Internet.


Una vez realizado el deployment, reemplazar los valores anteriores por las URLs reales proporcionadas por Railway.

🤖 Registro del uso de AI

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


