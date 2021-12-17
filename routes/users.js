// 1. Importación
const express = require("express")
const router = express.Router()

const userController = require("./../controllers/userController")
const authorization = require("./../middleware/authorization")

// 2. Router

// Crear usuario.
router.post ("/create", userController.create)

// 3. Exportación
module.exports = router