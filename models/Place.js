// 1. Importaciones
const mongoose = require("mongoose")

// 2. Schema
const placeSchema = mongoose.Schema({
    country: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    schedule: {
        type: String,
        required: true
    },
    price : {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    map: String
}, {timestamps: true})

// 3. Modelo.
const Place = mongoose.model("Place", placeSchema)

// 4. Exportación.
module.exports = Place