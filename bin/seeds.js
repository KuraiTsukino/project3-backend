// 1. Importaciones
const mongoose = require("mongoose")
const Country = require("./../models/Country")

require("dotenv").config()

// 2. Conexión a base de datos.
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// 3. Establecer los datos para poblar la base de datos.