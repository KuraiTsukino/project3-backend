// 1. Importaciones
const { Router } = require("express")
const express = require("express")
const router = express.Router()

const placeController = require("./../controllers/placeController")

// 2. Ruteo. Router

// Crear un lugar.
router.post("/create", placeController.create)

// Leer todos los lugares.
router.get("/readall", placeController.readAll)

// Leer un lugar.
router.get("/readone/:id", placeController.readOne)

// Actualizar un lugar.
router.put("/edit/:id", placeController.edit)

// Borrar un lugar.
router.delete("/delete/:id", placeController.delete)

// 3. Exportaciones
module.exports = router