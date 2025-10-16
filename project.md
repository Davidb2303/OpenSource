# 🧩 Proyecto Open Source – CRUD con Prisma y Express

## 📖 Descripción General

Este proyecto implementa una arquitectura **modular y escalable** utilizando **Node.js**, **Express** y **Prisma ORM** para la gestión de datos en una base de datos **MySQL**.  
El objetivo es mantener una estructura clara y profesional basada en capas: **Rutas → Controladores → Servicios → Prisma ORM**.
La base de datos se creo con python usando sqlarchemy y polars para ingresar datos en las diferentes tablas
---

## ⚙️ Tecnologías Principales

- **Node.js** – Entorno de ejecución de JavaScript
- **Express.js** – Framework web para la API REST
- **Prisma ORM** – ORM moderno para conectar con la base de datos MySQL
- **MySQL** – Sistema de gestión de bases de datos relacional
- **Postman** – Pruebas de los endpoints
- **dotenv** – Manejo de variables de entorno

---

## 🏗️ Estructura del Proyecto

```bash
ProyectoOpenSource/
│
├── prisma/
│   ├── schema.prisma          # Definición del modelo de datos
│
├── src/
│   ├── controllers/           # Lógica de manejo de peticiones HTTP
│   │   └── usuarios.controller.js
│   │
│   ├── routes/                # Definición de endpoints
│   │   └── usuarios.routes.js
│   │
│   ├── services/              # Lógica de negocio y conexión con Prisma
│   │   └── usuarios.service.js
│   │
│   ├── server.js              # Configuración principal del servidor Express
│
├── .env                       # Variables de entorno (DB_URL, PORT)
├── package.json               # Dependencias y scripts
├── README.md                  # Documentación del proyecto
└── pruebas_usuarios.postman_collection.json # Colección para Postman

## 📡 Endpoints Disponibles

| Método | Endpoint              | Descripción               |
|--------|-----------------------|---------------------------|
| GET    | /api/usuarios         | Listar todos los usuarios |
| GET    | /api/usuarios/:id     | Obtener un usuario por ID |
| POST   | /api/usuarios         | Crear un nuevo usuario    |
| PUT    | /api/usuarios/:id     | Actualizar usuario por ID |
| DELETE | /api/usuarios/:id     | Eliminar usuario por ID   |
