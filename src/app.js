import express from "express";
import cors from "cors";
import datosRoutes from "./routes/datos.routes.js";
import estudiantesRoutes from "./routes/estudiantes.routes.js";
import exportRoutes from "./routes/export.routes.js";

const app = express();

// Configuración de CORS para permitir solicitudes desde el frontend
app.use(cors({
  origin: ["http://localhost:3001", "http://localhost:3000","http://172.28.16.1:3000"], // Puertos del frontend React
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());
app.use("/api/datos", datosRoutes);
app.use("/api/estudiantes", estudiantesRoutes);
app.use("/api/export", exportRoutes);

export default app;
