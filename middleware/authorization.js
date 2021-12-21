// Desencripta el Json Web Token

// Importaciones
const jwt = require("jsonwebtoken")

// Función
const decrypt = async (req, res, next) => {

    // Capturar el token y guardarlo en una variable.
    const token = req.header("x-auth-token")

    if(!token) {
        return res.status(401).json({
            msg: "No token, invalid permission"
        })
    }

    // Si hay token y todo bien...
    try {
        const openToken = await jwt.verify(token, process.env.SECRET)

        req.user = openToken.user

        next()

    } catch (error) {
        res.json(
            {
                msg: "There was an error with the Token",
            }
        )
    }
}

// Exportación
module.exports = decrypt