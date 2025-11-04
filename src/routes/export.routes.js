import express from "express";
import { ExportController } from "../controllers/export.controller.js";

const router = express.Router();

// POST /api/export/csv -> devuelve el archivo CSV con el horario
router.post("/csv", ExportController.csv);

// POST /api/export/csv-estudiantes -> devuelve el archivo CSV con detalles de estudiantes
router.post("/csv-estudiantes", ExportController.csvEstudiantes);

// POST /api/export/excel -> devuelve archivo Excel unificado con toda la información
router.post("/excel", ExportController.excel);

export default router;
