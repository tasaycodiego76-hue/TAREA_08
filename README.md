# Procedimientos 
1. Clonar el repositorio
git clone https://...
2. 📚 Restaurar la BD
```sql
CREATE DATABASE bd_empleados;
USE bd_empleados;

CREATE TABLE empleados (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  cargo VARCHAR(50),
  edad INT,
  correo VARCHAR(100)
);
```

3.Abrir el proyecto _biblioteca_ en VSCode

4. Abrir la terminal **CTRL + Ñ** escribir: 
```
npm install
```
Se ejecutara la instalacion de todas las dependencias definidas en **package.json**

5. Crear e Ingresar los parametros en el archivo **.env**

6. Ejecutar el servidor (_nodemon)
```
nodemon server
```
7. Verificar cada verbo (GET/POST/PUT/DELETE) utilizando PostMan, ThunderClient

# 📖 GET-Listar todos los libros
```
http://localhost:3000/api/empleados
```
# ➕ POST - Crear nuevo libro
POST http://localhost:3000/api/empleados
```
{
  "nombre": "Carlos López",
  "cargo": "Contador",
  "edad": 32,
  "correo": "carlos@example.com"
}
```
# ✏️ PUT - Actualizar libro
PUT http://localhost:3000/api/empleados/1
```
{
  "nombre": "Carlos López",
  "cargo": "Administrador",
  "edad": 33,
  "correo": "carloslopez@example.com"
}

```

# 🗑️ DELETE - Eliminar libro
```
DELETE http://localhost:3000/api/empleados/1
```

8. 📁 Estructura del Proyecto
```
TAREA_08/
├── config/
│   └── db.js                  # Configuración de conexión a MySQL
├── controllers/
│   └── empleadoController.js   # Lógica de negocio (CRUD)
├── node_modules/               # Dependencias (generado por npm install)
├── routes/
│   └── empleadoRoutes.js       # Definición de rutas
├── .env                        # Variables de entorno
├── .gitignore                  # Archivos ignorados por Git
├── package.json                # Dependencias del proyecto
├── server.js                   # Servidor principal
└── README.md                   # Documentación

```
9. 🛠️ Tecnologías Utilizadas

```
Node.js - Entorno de ejecución
Express - Framework web
MySQL2 - Driver para MySQL con soporte de promesas
Dotenv - Gestión de variables de entorno
Nodemon - Reinicio automático del servidor
```