import express from "express";
import { DatosController } from "../controllers/datos.controller.js";

const router = express.Router();

router.get("/", DatosController.getAll);
router.get("/:id", DatosController.getById);
router.post("/", DatosController.create);
router.put("/:id", DatosController.update);
router.delete("/:id", DatosController.remove);

export default router;
