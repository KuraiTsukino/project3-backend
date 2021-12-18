// 1. Importaciones
const { Router } = require("express")
const express = require("express")
const router = express.Router()

const countryController = require("./../controllers/countryController")

// 2. Ruteo. Router

// Leer los países.
router.get("/readall", countryController.readAll)

// Leer un país.
router.get("/readone/:id", countryController.readOne)

// 3. Exportaciones
module.exports = router