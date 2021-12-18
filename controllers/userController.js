// 1. Importaciones
const bcryptjs = require("bcryptjs")
const { JsonWebTokenError } = require("jsonwebtoken")
const jwt = require("jsonwebtoken")

const User = require("./../models/User")

// 2. Funciones.

// Crear un usuario.
exports.create = async (req, res) => {

    // 1. Obtener usuario, email y password del formulario
    const {
        firstName,
        lastName,
        country,
        email,
        password,
        imgUrl,
        whishList
    } = req.body

    // 2a. Realizar el proceso asíncrono.
    try {
        // 3. Generar password para base de datos.
        const salt = await bcryptjs.genSalt(10)

        // genera un password encriptado.
        const hashedPassword = await bcryptjs.hash(password, salt)

        // 4. Crear un usuario en base de datos.
        const newUser = await User.create({
            firstName,
            lastName,
            country,
            email,
            password: hashedPassword,
            imgUrl,
            whishList
        })

        // 5. Autenticación con Tokens.
        // 5a. Crear un payload (información del usuario)
        const payload = {
            user: {
                id: newUser._id // ID del usuario del MongoDB.
            }
        }

        // 5b. Firmar el token.
        jwt.sign(
            payload,
            process.env.SECRET,
            {
                expiresIn: 3600000    
            },
            (error, token) => {
                if(error) throw error

                res.json({
                    msg: "Token correctamente generado",
                    data: token
                })
            }
        )

    } catch (error) {
        // 2b. En caso de error con await
        res.status(500).json({
            msg: "Hubo un error con la creación de usuario",
            error: error
        })
    }
}

// Iniciar sesión.
// Autenticar que la persona pase su email y contraseña, coincidan y se le envía un token.
exports.login = async (req, res) => {

    // 1. Obtener el email y el password del formulario.
    const { email, password } = req.body

    try {
        // 2. Ubicar al usuario en base de datos.
        const foundUser = await User.findOne({ email })

        // 3. Validación, si no hubo un usuario...
        if (!foundUser) {
            return res.status(400).json({
                msg: "User or password are wrong."
            })
        }

        // 4. Si el usuario fue encontrado, se evalúa la contraseña. 
        const verifiedPass = await bcryptjs.compare(password, foundUser.password)

        // 5. Validación, si el password no coincide...
        if(!verifiedPass) {
            return await res.status(400).json({
                msg: "User or password doesn't match."
            })
        }

        // 6. Si todo coincide y es correcto, generar un Json Web Token
        // 6a. Establecer un payload
        const payload = {
            user: {
                id: foundUser.id
            }
        }
        
        // 6b. Firma del Json Web Token
        jwt.sign(
            payload, 
            process.env.SECRET,
            {
                expiresIn: 360000
            },
            (error, token) => {
                if(error) throw error
                res.json({
                    msg: "Log in success",
                    data: token
                })
            }
        )

        return 

    } catch (error) {
        res.status(500).json({
            msg:"There was a problem with authentication ",
            data: error
        })
    }
}

// Verificar usuario con el Token. 
// La ruta es la que pedirá el token para verificar el usuario desencriptándolo.
exports.verifyToken = async(req, res) => {
    try {

        // 1. Buscar el ID del usuario (del token abierto) en la base de datos
        const foundUser = await User.findById(req.user.id).
        select ("-password")

        return res.json({
            msg: "User data found",
            data: foundUser
        })

    } catch (error) {
        res.status(500).json({
            msg: "There was an error with the user"
        })
    }
}