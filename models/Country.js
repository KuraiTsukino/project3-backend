// 1. Importaciones
const mongoose = require("mongoose")

// 2. Schema
const countrySchema = mongoose.Schema({
    name: String,
    flag: String,
    capital: String,
    borders: [String], 
    currency: String,
    language: String,
    airports: [String],
    image: String
}, {timestamps: true})

// 3. Modelo.
const Country = mongoose.model("Country", countrySchema)

// 4. Exportación
module.exports = Country
