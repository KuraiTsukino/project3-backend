// 1. Importaciones
const { Router } = require("express")
const express = require("express")
const router = express.Router()

const placeController = require("./../controllers/placeController")

// 2. Ruteo. Router

// Leer los países.
router.get("/readall", placeController.readAll)

router.get("/readone/:id", placeController.readOne)

// 3. Exportaciones
module.exports = router