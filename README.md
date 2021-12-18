# Backend de la Aplicación

Posterior haber iniciado el proyecto se instalan las dependencias de:
* bcryptjs
* cors
* dotenv
* express
* jsonwebtoken
* mongoose

En este Backend podemos encontrar el CRUD (Create, Read, Update y Delete) de los modelos.

Contamos con los modelos de:
* Usuarios (User).
* Ciudades (Country).
* Lugares para visitar (Place).

Iniciamos creando el "Index.js" que es donde se hace la conexión a la base de datos de MongoDB, en la cual utilizaremos la base de Producción, así mismo se crea la conexión al servidor, se establecen los Middlewares y se inician las rutas. 

Posteriormente en la carpeta de "routes" creamos las rutas para el CRUD de cada uno de los modelos, que tendrán sus controllers en la carpeta de "controllers".

