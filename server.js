const express = require('express')
const cors = require('cors')
const fs = require('fs').promises
const path = require('path')

// Rutas
const empleadoRoutes = require('./routes/empleadoRoutes')

const app = express()
const PORT = process.env.PORT || 3000

//* CONFIGURACIÓN *
// Permisos CORS
app.use(cors({
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true
}))

// Middleware JSON
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Carpeta de uploads (si luego quieres manejar fotos)
const uploadDir = path.join(__dirname, 'public', 'uploads')
fs.mkdir(uploadDir, { recursive: true })
  .then(() => console.log('Carpeta de uploads lista'))
  .catch(err => console.error('Error creando carpeta uploads:', err))

// Rutas API
app.use('/api/empleados', empleadoRoutes)

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`)
})
