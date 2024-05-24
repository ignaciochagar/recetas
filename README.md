# Recetas API

## Descripción

La API de Recetas permite gestionar recetas culinarias con diferentes niveles de acceso según el rol del usuario: Administrador, Chef y Usuario. La autenticación es requerida para acceder a las funcionalidades de la API, utilizando JSON Web Tokens (JWT).

- **Administrador**: Tiene acceso completo a todas las funcionalidades de la API sin restricciones.
- **Chef**: Puede crear y gestionar sus propias recetas y comentarios.
- **Usuario**: Puede visualizar recetas pero no puede modificar ni crear contenido.

## Instalación y Configuración

### Requisitos Previos

- Node.js
- MongoDB

### Instalación

1. Clona el repositorio:
   ```bash
   git clone git@github.com:ignaciochagar/recetas.git
   cd recetas-api


### Estructura del Proyecto

/controllers
  /authentication
    authController.js
  /comments
    commentsController.js
  /recipes
    recipeController.js
  /users
    userController.js
/middleware
  authenticateToken.js
/models
  Recipe.js
  User.js
  Comment.js
/routes
  recipeRoutes.js
  userRoutes.js
  commentRoutes.js
  authorRoute.js
  router.js


 ### Rutas de la API
Autenticación
Usuarios
Recetas
    Para Administradores
        Crear Receta
        Actualizar Receta
        Eliminar Receta
        Eliminar comentarios
    Para Chefs
        Crear Receta
        Actualizar Receta Propia
        Eliminar Receta Propia
    Para Usuarios
        Ver recetas
        Ver recetas por autor
        Obtener comentarios recetas


