# BootMakers eCommerce App, UCAMP Fullstack Developer course, in Mexico

> eCommerce MERN App 
> Usuarios, Productos, y Pedidos integrados MongoDB(ATLAS)

### Run
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server



## Sample User Logins

admin@demo.com (Admin)
demo

demo@demo.com (Customer)
demo

demo1@demo.com (Customer)
demo

demo2@demo.com (Customer)
demo



> Otras librerias utilizadas: 
    + REDUX: Para guardar los estados de la palicacion
    + AXIOS: Peticiones al servidor
    + REACT-BOOTSTRAP:  framework-frontend , 
    + REACT-REVEAL para animaciones, 
    + JSONWEBTOKEN: como seguridad para peticiones al servidor jwt
    + MORGAN: es un middleware para Express to log HTTP requests and errors, and simplifies the process.
    + BCRYPTJS: para encriptar/desencriptar los password
    + MULTER: Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files
    + Helmet.js is a Node.js module that helps in securing HTTP headers. It is implemented in express applications. 
    + react-paypal-button-v2: permite integrar PAYPAL y tarjetas de credito con SANDBOX (ambiente de pruebas)
    + AWESOME: Fonts
    


## Estructura de la APP
- Frontend
    + images: iNmagenes de los productos
    + index.html: React 
    + src
        * actions: para ejecutar acciones de Usuarios, Productos, Productos, Carrito, 
        * components
        * const
        * reducers
        * screens
        * App.js
        * archivos .CSS: index, bootstrap
        * archivos .js: index, serviceWorkers, store

- Backend
    + config: funciones para conectarse a MongoDB 
    + controllers: Apis de Usuarios, Productos y Pedidos
    + middleware: Autorizar o no mediante JWT la interaccion web con frontend
    + models: SCHEMAS/Definición de colecciones de documentos para Usuarios/Clientes, Productos, Pedidos y validaciones para Mongoose
    + routes: definicion y validacion de rutas para Usuarios, Productos, Pedidos


## Caracteristicas de la APP

- CRUD Usuarios/Clientes
- CRUD Productos
- CRUD Pedidos
- Shopping cart
- Reseñas del Producto (tiene que estar logueado para hacer reseña)
- Carrusel de los 3 primeros Productos
- Se manejan 8 productos por página, puedes ir a la siguiente pagina o la anterior
- Busquedas de Productos en Header
- Consulta de Pedidos de un Usuario/Cliente
- Checkout(Pago) (datos de envio, metodo de pago, etc)
- Al momento de pagar se enlaza con API PayPal / credit card en ambiente PRUEBAS (SANDBOX)
- Utilería para eliminar o registrar los productos demo desde terminal/Node:  Database seeder (products & users)
    + npm run data:import

Con Usuario Administrador:
- CRUD de productos
- CRUD de Usuarios
- CRUD de Pedidos de Clientes
- Consulta de Pedidos en general y Detallada
- Marcar Pedidos como Enviados

## Usage

### ES Modules in Node

We use ECMAScript Modules in the backend in this project. Be sure to have at least Node v14.6+ or you will need to add the "--experimental-modules" flag.

Also, when importing a file (not a package), be sure to add .js at the end or you will get a "module not found" error

You can also install and setup Babel if you would like

### Env Variables

Se creó archivo .env en root y se configuró MONGO_URI y PAYPAL_CLIENT_id en PAYPAL ambiente SANDBOX (pruebas)

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
```

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```


## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

There is a Heroku postbuild script, so if you push to Heroku, no need to build manually for deployment to Heroku

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```


