const express = require('express')
const router = express.Router()
const empleadoController = require('../controllers/empleadoController')

// CRUD 
router.get('/', empleadoController.obtenerTodos)   // GET - listar 
router.post('/', empleadoController.crear)         // POST - crear
router.put('/:id', empleadoController.actualizar)  // PUT - actualizar
router.delete('/:id', empleadoController.eliminar) // DELETE - eliminar

module.exports = router
