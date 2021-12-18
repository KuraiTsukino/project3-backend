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

## Modelo Usuario - User.

Cuenta con las propiedades de:

* First name - String, obligatorio.
* Last name - String.
* Country - String.
* Email - String, cuenta con validación para que tenga @.
* Password - String, obligatorio.
* ImgUrl - Imagen de perfil.
* Wish list - Donde el usuario agregará los lugares a donde quiere viajar.
* Timestamps - Para saber cuándo se creó el usuario

Este modelo tiene tres rutas:

* Creación de usuario. 
Para su creación se utilizó el modelo de User, la dependencia de "bcryptjs" para encriptar el password y la creación de un token que fue firmado con la dependencia de "JsonWebToken"

* Iniciar sesión de usuario.
Para la sesión se obtiene el email y el password del formulario por medio del "req.body", usando un try/catch de encuentra el usuario en la base de datos, al encontrarlo compara la contraseña encriptada con "bcryptjs", establece un payload y nuevamente "jsonwebtoken" firma el token.

* Verificación de Token del usuario.
Se usó un try/catch para encontrar el ID del usuario loggeado en la base de datos.
Usa la autorización de "jsonwebtoken" para capturar el token, guardarlo en una variable, si hay token permite al usuario seguir, si no hay no puede seguir viendo la página.

## Modelo de Country - País.

Cuenta con las propiedades de:

* Name - String,
* Flag - String,
* Capital - String,
* Borders - Arreglo de Strings,
* Currency - String,
* Language - String,
* Airports - Arreglo de Strings,
* Image - String,
* Timestamps - Para saber cuando se creó el país.

Este modelo tiene tres rutas:

## Modelo de Places - Lugares.

Cuenta con las propiedades de:

* Country - String, requerido,
* Name - String, requerido,
* Type - String, requerido,
* Schedule - String, requerido, 
* Price - String, requerido,
* Image - String, requerido,
* Description - String, requerido,
* Map - String,
* Timestamps - Para saber cuando se creó el lugar.

Este modelo tiene tres rutas: