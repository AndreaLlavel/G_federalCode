//Utilizar express
const express = require('express')
const router = express.Router()
const controller = require('../controllers/index.controller')
//Queremos acceder a la ruta, y a un callback
//Rutas Get
router.get('/', controller.index)
//Rutas Post
router.post('/add-user', controller.addUser)
router.post('/update-user/:userId', controller.updateUser)
//crear una variable , para poder acceder a ella, desde el controlador

//PUT
router.put(`/update-user/:userId`, controller.updateUser)
//DELETE
router.delete(`/delete-user/:userId`, controller.deleteUser)

module.exports = router