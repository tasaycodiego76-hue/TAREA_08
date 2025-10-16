const express = require('express')
const cors = require('cors')

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

// Rutas API
app.use('/api/empleados', empleadoRoutes)

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`)
})
