// 1. Importaciones
const { Router } = require("express")
const express = require("express")
const router = express.Router()

const countryController = require("./../controllers/countryController")

// 2. Ruteo. Router

// Leer ciudades.
router.get("/readall", countryController.readAll)

// 3. Exportaciones
module.exports = router