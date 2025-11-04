import { DatosService } from "../services/datos.service.js";

// Sanitizar y validar datos
const sanitizeDatosData = (data) => {
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

export const DatosController = {
  async getAll(req, res) {
    try {
      const datos = await DatosService.findAll();
      res.json(datos);
    } catch (error) {
      console.error("Error al obtener datos:", error);
      res.status(500).json({ message: "Error al obtener registros" });
    }
  },

  async getById(req, res) {
    try {
      const { id } = req.params;
      const dato = await DatosService.findById(id);
      if (!dato) return res.status(404).json({ message: "Dato no encontrado" });
      res.json(dato);
    } catch (error) {
      console.error("Error al obtener dato:", error);
      res.status(500).json({ message: "Error al obtener registro" });
    }
  },

  async create(req, res) {
    try {
      const sanitized = sanitizeDatosData(req.body);
      
      // Validar que al menos nombre y apellido existan
      if (!sanitized.nombre || !sanitized.apellido) {
        return res.status(400).json({ message: "Nombre y apellido son requeridos" });
      }

      const nuevo = await DatosService.create(sanitized);
      res.status(201).json(nuevo);
    } catch (error) {
      console.error("Error al crear dato:", error.message);
      
      // Manejo específico de errores de restricción de llave foránea
      if (error.code === 'P2003') {
        return res.status(400).json({ 
          message: "Uno de los valores seleccionados no es válido. Por favor verifica los datos." 
        });
      }
      
      res.status(500).json({ message: "Error al crear registro" });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const sanitized = sanitizeDatosData(req.body);
      
      const actualizado = await DatosService.update(id, sanitized);
      res.json(actualizado);
    } catch (error) {
      console.error("Error al actualizar dato:", error.message);
      
      if (error.code === 'P2003') {
        return res.status(400).json({ 
          message: "Uno de los valores seleccionados no es válido." 
        });
      }
      
      res.status(500).json({ message: "Error al actualizar registro" });
    }
  },

  async remove(req, res) {
    try {
      const { id } = req.params;
      await DatosService.remove(id);
      res.status(204).end();
    } catch (error) {
      console.error("Error al eliminar dato:", error);
      res.status(500).json({ message: "Error al eliminar registro" });
    }
  },
};
