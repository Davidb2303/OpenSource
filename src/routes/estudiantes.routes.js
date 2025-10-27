import express from "express";
import { EstudiantesController } from "../controllers/estudiantes.controller.js";

const router = express.Router();

router.get("/", EstudiantesController.getAll);
router.get("/:id", EstudiantesController.getById);
router.post("/", EstudiantesController.create);
router.put("/:id", EstudiantesController.update);
router.delete("/:id", EstudiantesController.remove);

export default router;
