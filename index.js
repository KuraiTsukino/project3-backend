// 1. Importaciones
const express = require("express")
const app = express()
const cors = require("cors")

require("dotenv").config()

const connectDB = require("./config/db")

// 2. Middlewares

// Base de datos
connectDB()

// Habilitar cors (accesos de ambientes de desarrollo de terceros)
app.use(cors())

// Peticiones por protocolo Json
app.use(express.json())

// 3. Rutas
//app.use("/countries", require("./routes/countries"))
//app.use("/places", require("./routes/places"))
app.use("/users", require("./routes/users"))

// 4. Servidor
app.listen(process.env.PORT, () => {
    console.log(`Servidor conectado en puerto http://localhost:${process.env.PORT}`)
})