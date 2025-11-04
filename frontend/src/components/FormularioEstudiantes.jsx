import React, { useState } from 'react';
import { estudiantesService } from '../services/EstudiantesService';

const FormularioEstudiante = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    fk_id_doc: '',
    fk_id_civil: '',
    fk_id_gene: '',
    fk_pregrado: '',
    fk_id_semestre: '',
    fk_id_tipo_status: '',
    correo: '',
    telefono: '',
    // Campos de asignación de salón/horario (solo UI)
    asignatura: '',
    salon: '',
    dia: '',
    hora_inicio: '',
    hora_fin: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      // Validar datos requeridos
      if (!formData.nombre || !formData.apellido) {
        throw new Error('Nombre y apellido son requeridos');
      }

      if (!formData.fk_id_gene || !formData.fk_id_doc || !formData.fk_id_civil) {
        throw new Error('Género, Tipo Documento y Estado Civil son requeridos');
      }

      const nuevoEstudiante = {
        nombre: formData.nombre,
        apellido: formData.apellido,
        fk_id_doc: parseInt(formData.fk_id_doc),
        fk_id_civil: parseInt(formData.fk_id_civil),
        fk_id_gene: parseInt(formData.fk_id_gene),
        fk_pregrado: formData.fk_pregrado ? parseInt(formData.fk_pregrado) : null,
        fk_id_semestre: formData.fk_id_semestre ? parseInt(formData.fk_id_semestre) : null,
        fk_id_tipo_status: formData.fk_id_tipo_status ? parseInt(formData.fk_id_tipo_status) : null,
        correo: formData.correo || null,
        telefono: formData.telefono || null,
        asignatura: formData.asignatura || null,
        salon: formData.salon || null,
        dia: formData.dia || null,
        hora_inicio: formData.hora_inicio || null,
        hora_fin: formData.hora_fin || null,
      };

      await estudiantesService.create(nuevoEstudiante);
      setMessage({ type: 'success', text: '✅ Estudiante registrado correctamente' });

      setFormData({
        nombre: '',
        apellido: '',
        fk_id_doc: '',
        fk_id_civil: '',
        fk_id_gene: '',
        fk_pregrado: '',
        fk_id_semestre: '',
        fk_id_tipo_status: '',
        correo: '',
        telefono: '',
        asignatura: '',
        salon: '',
        dia: '',
        hora_inicio: '',
        hora_fin: '',
      });
    } catch (error) {
      console.error('Error al guardar estudiante:', error);
      setMessage({ type: 'error', text: '❌ Error al registrar el estudiante' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="formulario-container">
      <h1>🎓 Registro de Estudiantes</h1>

      {message.text && (
        <div className={`message ${message.type}`}>{message.text}</div>
      )}

      <form onSubmit={handleSubmit} className="formulario-estudiante">

        {/* DATOS PERSONALES */}
        <div className="section">
          <h2>👤 Datos Personales</h2>
          <label>Nombre:</label>
          <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />

          <label>Apellido:</label>
          <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} required />

          <label>Género:</label>
          <select name="fk_id_gene" value={formData.fk_id_gene} onChange={handleChange} required>
            <option value="">Seleccione...</option>
            <option value="1">Masculino</option>
            <option value="2">Femenino</option>
            <option value="3">Otro</option>
          </select>
        </div>

        {/* DOCUMENTACIÓN */}
        <div className="section">
          <h2>📋 Documentación</h2>
          <label>Tipo Documento:</label>
          <select name="fk_id_doc" value={formData.fk_id_doc} onChange={handleChange} required>
            <option value="">Seleccione...</option>
            <option value="1">Cédula</option>
            <option value="2">Tarjeta Identidad</option>
            <option value="3">Pasaporte</option>
          </select>

          <label>Estado Civil:</label>
          <select name="fk_id_civil" value={formData.fk_id_civil} onChange={handleChange}>
            <option value="">Seleccione...</option>
            <option value="1">Soltero(a)</option>
            <option value="2">Casado(a)</option>
            <option value="3">Unión Libre</option>
          </select>
        </div>

        {/* INFORMACIÓN ACADÉMICA */}
        <div className="section">
          <h2>🏫 Información Académica</h2>
          <label>Asignatura:</label>
          <input type="text" name="asignatura" value={formData.asignatura} onChange={handleChange} placeholder="Ej: Física I" />

          <label>Salón / Aula:</label>
          <input type="text" name="salon" value={formData.salon} onChange={handleChange} placeholder="Ej: 306 T IND" />

          <label>Pregrado:</label>
          <select name="fk_pregrado" value={formData.fk_pregrado} onChange={handleChange}>
            <option value="">Seleccione...</option>
            <option value="1">Ingeniería de Sistemas</option>
            <option value="2">Administración</option>
            <option value="3">Derecho</option>
          </select>

          <label>Semestre:</label>
          <select name="fk_id_semestre" value={formData.fk_id_semestre} onChange={handleChange}>
            <option value="">Seleccione...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>

          <label>Status:</label>
          <select name="fk_id_tipo_status" value={formData.fk_id_tipo_status} onChange={handleChange}>
            <option value="">Seleccione...</option>
            <option value="1">Activo</option>
            <option value="2">Inactivo</option>
          </select>

          <div className="subsection">
            <h3>Horario de la clase</h3>
            <label>Día:</label>
            <select name="dia" value={formData.dia} onChange={handleChange}>
              <option value="">Seleccione...</option>
              <option value="LUNES">Lunes</option>
              <option value="MARTES">Martes</option>
              <option value="MIERCOLES">Miércoles</option>
              <option value="JUEVES">Jueves</option>
              <option value="VIERNES">Viernes</option>
            </select>

            <label>Hora inicio:</label>
            <input type="time" name="hora_inicio" value={formData.hora_inicio} onChange={handleChange} />

            <label>Hora fin:</label>
            <input type="time" name="hora_fin" value={formData.hora_fin} onChange={handleChange} />
          </div>
        </div>

        {/* CONTACTO */}
        <div className="section">
          <h2>📞 Contacto</h2>
          <label>Correo:</label>
          <input type="email" name="correo" value={formData.correo} onChange={handleChange} />

          <label>Teléfono:</label>
          <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
        </div>

        <div className="button-container">
          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? '⏳ Guardando...' : '💾 Registrar Estudiante'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormularioEstudiante;
