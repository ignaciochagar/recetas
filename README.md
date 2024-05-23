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
   git clone https://github.com/tu-usuario/recetas-api.git
   cd recetas-api