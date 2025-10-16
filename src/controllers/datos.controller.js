import { DatosService } from "../services/datos.service.js";

export const DatosController = {
  async getAll(req, res) {
    const datos = await DatosService.findAll();
    res.json(datos);
  },

  async getById(req, res) {
    const { id } = req.params;
    const dato = await DatosService.findById(id);
    if (!dato) return res.status(404).json({ message: "Dato no encontrado" });
    res.json(dato);
  },

  async create(req, res) {
    const nuevo = await DatosService.create(req.body);
    res.status(201).json(nuevo);
  },

  async update(req, res) {
    const { id } = req.params;
    const actualizado = await DatosService.update(id, req.body);
    res.json(actualizado);
  },

  async remove(req, res) {
    const { id } = req.params;
    await DatosService.remove(id);
    res.status(204).end();
  },
};
