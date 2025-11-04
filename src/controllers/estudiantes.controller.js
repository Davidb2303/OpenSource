import { EstudiantesService } from "../services/estudiantes.service.js";

// Sanitizar y validar datos de estudiante
const sanitizeEstudianteData = (data) => {
  const sanitized = {
    nombre: data.nombre || null,
    apellido: data.apellido || null,
    correo: data.correo || null,
    telefono: data.telefono || null,
    asignatura: data.asignatura || null,
    salon: data.salon || null,
    dia: data.dia || null,
    hora_inicio: data.hora_inicio || null,
    hora_fin: data.hora_fin || null,
  };

  // Convertir y validar campos de llave foránea
  if (data.fk_id_doc) {
    const docId = parseInt(data.fk_id_doc, 10);
    if (!isNaN(docId)) sanitized.fk_id_doc = docId;
  }

  if (data.fk_id_civil) {
    const civilId = parseInt(data.fk_id_civil, 10);
    if (!isNaN(civilId)) sanitized.fk_id_civil = civilId;
  }

  if (data.fk_id_gene) {
    const geneId = parseInt(data.fk_id_gene, 10);
    if (!isNaN(geneId)) sanitized.fk_id_gene = geneId;
  }

  if (data.fk_pregrado) {
    const pregradoId = parseInt(data.fk_pregrado, 10);
    if (!isNaN(pregradoId)) sanitized.fk_pregrado = pregradoId;
  }

  if (data.fk_id_semestre) {
    const semestreId = parseInt(data.fk_id_semestre, 10);
    if (!isNaN(semestreId)) sanitized.fk_id_semestre = semestreId;
  }

  if (data.fk_id_tipo_status) {
    const statusId = parseInt(data.fk_id_tipo_status, 10);
    if (!isNaN(statusId)) sanitized.fk_id_tipo_status = statusId;
  }

  return sanitized;
};

export const EstudiantesController = {
  async getAll(req, res) {
    try {
      const estudiantes = await EstudiantesService.findAll();
      res.json(estudiantes);
    } catch (error) {
      console.error("Error al obtener estudiantes:", error);
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
      console.error("Error al obtener estudiante:", error);
      res.status(500).json({ message: "Error al obtener estudiante" });
    }
  },

  async create(req, res) {
    try {
      const sanitized = sanitizeEstudianteData(req.body);
      
      // Validar que al menos nombre y apellido existan
      if (!sanitized.nombre || !sanitized.apellido) {
        return res.status(400).json({ message: "Nombre y apellido son requeridos" });
      }

      const nuevo = await EstudiantesService.create(sanitized);
      res.status(201).json(nuevo);
    } catch (error) {
      console.error("Error al crear estudiante:", error.message);
      
      // Manejo específico de errores de restricción de llave foránea
      if (error.code === 'P2003') {
        return res.status(400).json({ 
          message: "Uno de los valores seleccionados no es válido. Por favor verifica los datos." 
        });
      }
      
      res.status(500).json({ message: "Error al crear estudiante" });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const sanitized = sanitizeEstudianteData(req.body);
      
      const actualizado = await EstudiantesService.update(id, sanitized);
      res.json(actualizado);
    } catch (error) {
      console.error("Error al actualizar estudiante:", error.message);
      
      if (error.code === 'P2003') {
        return res.status(400).json({ 
          message: "Uno de los valores seleccionados no es válido." 
        });
      }
      
      res.status(500).json({ message: "Error al actualizar estudiante" });
    }
  },

  async remove(req, res) {
    try {
      const { id } = req.params;
      await EstudiantesService.remove(id);
      res.status(204).end();
    } catch (error) {
      console.error("Error al eliminar estudiante:", error);
      res.status(500).json({ message: "Error al eliminar estudiante" });
    }
  },
};
