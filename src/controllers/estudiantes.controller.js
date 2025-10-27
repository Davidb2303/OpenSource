import { EstudiantesService } from "../services/estudiantes.service.js";

export const EstudiantesController = {
  async getAll(req, res) {
    try {
      const estudiantes = await EstudiantesService.findAll();
      res.json(estudiantes);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener estudiantes" });
    }
  },

  async getById(req, res) {
    try {
      const { id } = req.params;
      const estudiante = await EstudiantesService.findById(id);
      if (!estudiante) return res.status(404).json({ message: "No encontrado" });
      res.json(estudiante);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener estudiante" });
    }
  },

  async create(req, res) {
    try {
      const nuevo = await EstudiantesService.create(req.body);
      res.status(201).json(nuevo);
    } catch (error) {
      res.status(500).json({ message: "Error al crear estudiante" });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const actualizado = await EstudiantesService.update(id, req.body);
      res.json(actualizado);
    } catch (error) {
      res.status(500).json({ message: "Error al actualizar estudiante" });
    }
  },

  async remove(req, res) {
    try {
      const { id } = req.params;
      await EstudiantesService.remove(id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ message: "Error al eliminar estudiante" });
    }
  },
};
