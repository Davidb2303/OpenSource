# 🎓 Sistema de Gestión Académica

Un sistema moderno y completo para la gestión de registros académicos de maestros y estudiantes, con exportación a CSV en formato profesional.

## ✨ Características

- ✅ **Registro de Maestros**: Formulario completo con información personal, académica y laboral
- ✅ **Registro de Estudiantes**: Formulario para registro de estudiantes con asignación de horarios
- ✅ **Visualización de Registros**: Vista de tabla interactiva con edición y eliminación
- ✅ **Exportación CSV**: Exportar registros en formato profesional tipo horario académico
- ✅ **UI/UX Moderno**: Interfaz intuitiva y responsive con gradientes modernos
- ✅ **Validación de Datos**: Validación robusta en frontend y backend

## 🛠️ Tecnologías Utilizadas

### Backend
- **Node.js** con Express.js
- **Prisma** como ORM
- **MySQL** como base de datos
- **Cors** para solicitudes cross-origin

### Frontend
- **React** 18.2.0
- **React Router** v6 para navegación
- **Axios** para peticiones HTTP
- **CSS3** con variables y flexbox

## 📋 Requisitos Previos

- Node.js v14 o superior
- MySQL Server
- npm o yarn

## 🚀 Instalación

### 1. Clonar y navegar al proyecto

```bash
cd c:\Users\Alejito\Desktop\OpenSource\OpenSource
```

### 2. Instalar dependencias del backend

```bash
npm install
```

### 3. Configurar Base de Datos

Asegúrate de que tu archivo `.env` en la raíz del proyecto tenga la configuración correcta:

```env
DATABASE_URL="mysql://root:Alejito2006***@localhost:3306/sscd_horarios"
```

> **Nota**: Cambia la contraseña y los datos según tu configuración local de MySQL.

### 4. Inicializar la base de datos

```bash
npm seed
```

Este comando creará las tablas necesarias e insertará los datos iniciales (estados, documentos, géneros, estados civiles).

### 5. Instalar dependencias del frontend

```bash
cd frontend
npm install
```

## 🏃 Ejecución

### Terminal 1: Iniciar el Backend

```bash
npm start
```

El servidor estará disponible en: `http://localhost:3000`

### Terminal 2: Iniciar el Frontend

```bash
cd frontend
npm start
```

El frontend estará disponible en: `http://localhost:3001`

## 📖 Uso de la Aplicación

### Registrar un Maestro
1. Haz clic en **"📝 Maestros"** en la navegación
2. Completa el formulario con la información personal, académica y laboral
3. Haz clic en **"💾 Guardar Registro Completo"**

### Registrar un Estudiante
1. Haz clic en **"👨‍🎓 Estudiantes"** en la navegación
2. Completa el formulario con la información del estudiante
3. Asigna la asignatura, salón y horario
4. Haz clic en **"💾 Registrar Estudiante"**

### Ver y Gestionar Registros
1. Haz clic en **"📋 Registros"** en la navegación
2. Visualiza todos los registros en la tabla
3. Edita un registro: Haz clic en **"✏️"**
4. Elimina un registro: Haz clic en **"🗑️"**
5. **Exporta a CSV**: Haz clic en **"📊 Descargar CSV"**

### Exportar Registros a CSV
- El archivo CSV generado seguirá el formato profesional del horario académico
- Incluye: Encabezado institucional, lista de materias con intensidad, y grid horario semanal

## 📊 Formato del CSV Exportado

```
UNIVERSIDAD
FACULTAD DE INGENIERIAS: INGENIERIA
CARGA ACADEMICA DOCENTE
PERIODO,2020-I

CODIGO,ASIGNATURA,INTENSIDAD HORARIA
FISICA II 306 T IND,Física II,3
FISICA I 203 T IND,Física I,3
ESTADISTICA I 304 T IND,Estadística I,2
Matemáticas I 103 T IND,Matemáticas I,3
,,11

HORA,LUNES,MARTES,MIERCOLES,JUEVES,VIERNES
7:00-8:00,FISICA I 206 M IND,,,,,
...
```

## 🔧 Estructura del Proyecto

```
OpenSource/
├── src/
│   ├── app.js                 # Configuración de Express
│   ├── server.js              # Punto de entrada del servidor
│   ├── controllers/           # Lógica de negocio
│   ├── services/              # Servicios de base de datos
│   ├── routes/                # Rutas de API
│   ├── prisma/                # Configuración de Prisma
│   └── scripts/               # Scripts utilitarios
├── frontend/
│   ├── src/
│   │   ├── App.jsx            # Componente principal
│   │   ├── App.css            # Estilos globales
│   │   ├── components/        # Componentes React
│   │   └── services/          # Servicios de API
│   └── package.json
└── package.json
```

## 🐛 Solución de Problemas

### Error: "Foreign key constraint violated"
- Asegúrate de haber ejecutado `npm seed` para inicializar la base de datos
- Verifica que los valores de género, documento y estado civil sean válidos (1-5)

### Error: "Cannot connect to database"
- Verifica que MySQL esté ejecutándose
- Comprueba la `DATABASE_URL` en el archivo `.env`
- Asegúrate de que la base de datos `sscd_horarios` existe

### Puerto 3000 o 3001 en uso
- Cambia el puerto en `src/server.js` (línea: `const PORT = process.env.PORT || 3000;`)
- O, detén los procesos que están usando esos puertos

## 📝 API Endpoints

### Datos (Maestros/Estudiantes)
- `GET /api/datos` - Obtener todos los registros
- `GET /api/datos/:id` - Obtener un registro por ID
- `POST /api/datos` - Crear un nuevo registro
- `PUT /api/datos/:id` - Actualizar un registro
- `DELETE /api/datos/:id` - Eliminar un registro

### Exportación
- `POST /api/export/csv` - Generar y descargar CSV

## 👨‍💻 Desarrollo

### Agregar una nueva tabla a la base de datos
1. Modifica `src/prisma/schema.prisma`
2. Ejecuta `npx prisma migrate dev --name nombre_migracion`
3. Actualiza los servicios en `src/services/`

### Agregar un nuevo componente
1. Crea el archivo en `frontend/src/components/`
2. Importa en `frontend/src/App.jsx`
3. Agrega la ruta en el Router

## 📄 Licencia

Este proyecto es parte del programa OpenSource de la Universidad.

## 📞 Soporte

Para reportar problemas o sugerencias, contacta al equipo de desarrollo.

---

**Hecho con ❤️ para la gestión académica**
