//Utilizar express
const express = require('express')
const router = express.Router()
const controller = require('../controllers/index.controller')
//Queremos acceder a la ruta, y a un callback
router.get('/', controller.index)

module.exports = router