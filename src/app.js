import express from "express";
import datosRoutes from "./routes/datos.routes.js";

const app = express();

app.use(express.json());
app.use("/api/datos", datosRoutes);

export default app;
