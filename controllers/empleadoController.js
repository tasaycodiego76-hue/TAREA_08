const db = require('../config/db')

// Obtener todos los empleados
const obtenerTodos = async (req, res) => {
  try {
    const sql = "SELECT * FROM empleados"
    const [rows] = await db.query(sql)
    res.json(rows)
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: 'Error en la conexión' })
  }
}

// Crear empleado
const crear = async (req, res) => {
  try {
    const { nombre, cargo, edad, correo } = req.body

    // Validaciones básicas
    if (!nombre) {
      return res.status(400).json({ error: 'El nombre es obligatorio' })
    }

    const [result] = await db.query(
      "INSERT INTO empleados (nombre, cargo, edad, correo) VALUES (?,?,?,?)",
      [nombre, cargo || null, edad || null, correo || null]
    )

    res.status(201).json({
      id: result.insertId,
      message: 'Empleado creado correctamente'
    })
  } catch (e) {
    // Si hay duplicados u otros errores
    res.status(500).json({ error: 'Error al crear empleado' })
  }
}

// Actualizar empleado
const actualizar = async (req, res) => {
  try {
    const { id } = req.params
    const { nombre, cargo, edad, correo } = req.body

    if (!nombre) {
      return res.status(400).json({ error: 'El nombre es obligatorio' })
    }

    const [result] = await db.query(
      "UPDATE empleados SET nombre=?, cargo=?, edad=?, correo=? WHERE id=?",
      [nombre, cargo || null, edad || null, correo || null, id]
    )

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Empleado no encontrado' })
    }

    res.json({ message: 'Empleado actualizado correctamente' })
  } catch (e) {
    res.status(500).json({ error: 'Error al actualizar empleado' })
  }
}

// Eliminar empleado
const eliminar = async (req, res) => {
  try {
    const { id } = req.params

    const [result] = await db.query(
      "DELETE FROM empleados WHERE id=?",
      [id]
    )

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Empleado no encontrado' })
    }

    res.json({ message: 'Empleado eliminado correctamente' })
  } catch (e) {
    res.status(500).json({ error: 'Error al eliminar empleado' })
  }
}

module.exports = {
  obtenerTodos,
  crear,
  actualizar,
  eliminar
}
