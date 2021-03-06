# Backend de la Aplicaci贸n 馃殌 Tsukino Travels 馃殌

Posterior haber iniciado el proyecto se instalan las dependencias de:

* bcryptjs
* cors
* dotenv
* express
* jsonwebtoken
* mongoose

En este Backend podemos encontrar el CRUD (Create, Read, Update y Delete) de los modelos.

Contamos con los modelos de:
* Usuarios (User) 馃懁
* Ciudades (Country) 馃寚
* Lugares para visitar (Place) 馃彏

Iniciamos creando el "Index.js" que es donde se hace la conexi贸n a la base de datos de MongoDB, en la cual utilizaremos la base de Producci贸n, as铆 mismo se crea la conexi贸n al servidor, se establecen los Middlewares y se inician las rutas. 

Posteriormente en la carpeta de "routes" creamos las rutas para el CRUD de cada uno de los modelos, que tendr谩n sus controllers en la carpeta de "controllers".

## 馃懁 Modelo Usuario - User. 馃懁

Cuenta con las propiedades de:

* First name - String, obligatorio.
* Last name - String.
* Country - String.
* Email - String, cuenta con validaci贸n para que tenga @.
* Password - String, obligatorio.
* ImgUrl - Imagen de perfil.
* Wish list - Donde el usuario agregar谩 los lugares a donde quiere viajar.
* Timestamps - Para saber cu谩ndo se cre贸 el usuario

Este modelo tiene tres rutas:

* Creaci贸n de usuario. 
Para su creaci贸n se utiliz贸 el modelo de User, la dependencia de "bcryptjs" para encriptar el password y la creaci贸n de un token que fue firmado con la dependencia de "JsonWebToken"

* Iniciar sesi贸n de usuario.
Para la sesi贸n se obtiene el email y el password del formulario por medio del "req.body", usando un try/catch de encuentra el usuario en la base de datos, al encontrarlo compara la contrase帽a encriptada con "bcryptjs", establece un payload y nuevamente "jsonwebtoken" firma el token.

* Verificaci贸n de Token del usuario.
Se us贸 un try/catch para encontrar el ID del usuario loggeado en la base de datos.
Usa la autorizaci贸n de "jsonwebtoken" para capturar el token, guardarlo en una variable, si hay token permite al usuario seguir, si no hay no puede seguir viendo la p谩gina.

## 馃寚 Modelo de Country - Pa铆s 馃寚

Cuenta con las propiedades de:

* Name - String,
* Flag - String,
* Capital - String,
* Borders - Arreglo de Strings,
* Currency - String,
* Language - String,
* Airports - Arreglo de Strings,
* Image - String,
* Timestamps - Para saber cuando se cre贸 el pa铆s.

Este modelo tiene dos rutas 煤nicamente, ya que nuestra aplicaci贸n solo abarca, por el momento los pa铆ses de Europa, estos ya est谩n en una base de datos, por lo que ya no ser谩 necesario la creaci贸n, edici贸n o borrado de pa铆ses.

Sin embargo cuenta con la ruta de: 

* Lectura de todos los pa铆ses. La cual se obtiene con un try/catch y una funci贸n as铆ncrona, mediante el m茅todo Find.

* Lectura de un pa铆s. Obteniendo la id del pa铆s seleccionado, igualmente con un try/catch, con una funci贸n as铆ncrona, mediante el m茅todo FindById.

## 馃彏 Modelo de Places - Lugares 馃彏

Cuenta con las propiedades de:

* Country - String, requerido,
* Name - String, requerido,
* Type - String, requerido,
* Schedule - String, requerido, 
* Price - String, requerido,
* Image - String, requerido,
* Description - String, requerido,
* Map - String,
* Timestamps - Para saber cuando se cre贸 el lugar.

Este modelo tiene cinco rutas. Nuestros usuarios podr谩n crear un lugar, editarlo, borrarlo, as铆 como ver todos los de la base de datos y uno solo seleccionado.

* Creaci贸n de un lugar. Obteniendo los datos de un formulario, con un try/catch va a crear el lugar nuevo.

* Lectura de todos los lugares. Con un try/catch se obtiene los datos con el m茅todo Find.

* Lectura de un lugar. Obteniendo el id del lugar, con un try/catch se obtiene el dato con el m茅todo FindById.

* Editar un lugar. Obteniendo los datos de un formulario va a actualizar un lugar con un try/catch y el m茅todo de FindByIdAndUpdate.

* Borrar un lugar. Con el id del lugar seleccionado se borra un lugar por medio de un ty/catch y el m茅todo de FindByIdAndDelete

## 馃洜 Construido con 馃洜

* NodeJS
* Express
* Mongoose
* JavaScript - Funciones CRUD
* MongoDB - Base de datos
* Heroku - Despliegue

# Dependencias

* bcryptjs
* cors
* dotenv
* jsonwebtoken

## 鉁掞笍 Autora 鉁掞笍
[Kurai Tsukino](https://github.com/KuraiTsukino) aka Sandra Mena

## Gracias totales

A [Mike Nieva](https://github.com/mikenieva), [K'ohnin](https://github.com/konhin2) y a [Sam](https://github.com/ta-web-mex) por su ayuda y ense帽anzas invaluables 馃グ