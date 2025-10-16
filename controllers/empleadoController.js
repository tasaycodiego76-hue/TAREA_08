const db = require('../config/db')

// Listar todos
const obtenerTodos = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM empleados')
    res.json(rows)
  } catch (e) {
    res.status(500).json({ error: 'Error interno en el servidor' })
  }
}

// Crear
const crear = async (req, res) => {
  try {
    const { nombre, cargo, edad, correo } = req.body
    if (!nombre || !cargo || !edad || !correo)
      return res.status(400).json({ error: 'Todos los campos son obligatorios' })

    const [result] = await db.query(
      'INSERT INTO empleados (nombre, cargo, edad, correo) VALUES (?,?,?,?)',
      [nombre, cargo, edad, correo]
    )
    res.status(201).json({ id: result.insertId, message: 'Empleado creado correctamente' })
  } catch (e) {
    res.status(500).json({ error: 'Error al crear empleado' })
  }
}

// Actualizar
const actualizar = async (req, res) => {
  try {
    const { id } = req.params
    const { nombre, cargo, edad, correo } = req.body
    const [result] = await db.query(
      'UPDATE empleados SET nombre=?, cargo=?, edad=?, correo=? WHERE id=?',
      [nombre, cargo, edad, correo, id]
    )
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Empleado no encontrado' })
    res.json({ message: 'Empleado actualizado correctamente' })
  } catch (e) {
    res.status(500).json({ error: 'Error al actualizar empleado' })
  }
}

// Eliminar
const eliminar = async (req, res) => {
  try {
    const { id } = req.params
    const [result] = await db.query('DELETE FROM empleados WHERE id=?', [id])
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Empleado no encontrado' })
    res.json({ message: 'Empleado eliminado correctamente' })
  } catch (e) {
    res.status(500).json({ error: 'Error al eliminar empleado' })
  }
}

module.exports = { obtenerTodos, crear, actualizar, eliminar }
