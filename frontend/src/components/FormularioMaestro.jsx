import React, { useState } from 'react';
import { datosService } from '../services/datosService';

const FormularioMaestro = () => {
  const [formData, setFormData] = useState({
    // Datos Personales
    primer_nombre: '',
    segundo_nombre: '',
    primer_apellido: '',
    segundo_apellido: '',
    fk_id_gene: '',
    fecha_naci: '',
    direccion: '',
    
    // Documentación
    fk_id_doc: '',
    fk_id_civil: '',
    
    // Información Académica
    nombre_materia: '',
    nombre_aula: '',
    nombre_pregrado: '',
    fk_id_semestre: '',
    
    // Información Laboral
    nombre_cargo: '',
    fk_id_tipo_status: '',
    
    // Contacto
    correo: '',
    telefono: '',
    celular: '',
    
    // Institución
    nombre_cia: '',
    direccion_cia: '',
    telefono_cia: '',
    correo_cia: ''
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      // Validar datos requeridos
      if (!formData.primer_nombre || !formData.primer_apellido) {
        throw new Error('Nombre y apellido son requeridos');
      }

      if (!formData.fk_id_gene || !formData.fk_id_doc || !formData.fk_id_civil) {
        throw new Error('Género, Tipo Documento y Estado Civil son requeridos');
      }

      // Preparar los datos básicos para el modelo datos (según el schema de Prisma)
      const datosBasicos = {
        nombre: formData.primer_nombre,
        apellido: formData.primer_apellido,
        fk_id_doc: parseInt(formData.fk_id_doc),
        fk_id_civil: parseInt(formData.fk_id_civil),
        fk_id_gene: parseInt(formData.fk_id_gene)
      };

      await datosService.create(datosBasicos);
      
      setMessage({
        type: 'success',
        text: '✅ Registro guardado exitosamente'
      });
      
      // Limpiar formulario
      setFormData({
        primer_nombre: '',
        segundo_nombre: '',
        primer_apellido: '',
        segundo_apellido: '',
        fk_id_gene: '',
        fecha_naci: '',
        direccion: '',
        fk_id_doc: '',
        fk_id_civil: '',
        nombre_materia: '',
        nombre_aula: '',
        nombre_pregrado: '',
        fk_id_semestre: '',
        nombre_cargo: '',
        fk_id_tipo_status: '',
        correo: '',
        telefono: '',
        celular: '',
        nombre_cia: '',
        direccion_cia: '',
        telefono_cia: '',
        correo_cia: ''
      });
      
    } catch (error) {
      console.error('Error al guardar:', error);
      setMessage({
        type: 'error',
        text: '❌ Error al guardar el registro. Por favor, inténtalo de nuevo.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="formulario-container">
      <h1>📝 Sistema de Gestión Académica</h1>
      
      {message.text && (
        <div className={`message ${message.type}`}>
          {message.text}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="formulario-maestro">
        
        {/* SECCIÓN DATOS PERSONALES */}
        <div className="section">
          <h2>👤 Datos Personales</h2>
          <div className="form-group">
            <label>Primer Nombre:</label>
            <input
              type="text"
              name="primer_nombre"
              value={formData.primer_nombre}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Segundo Nombre:</label>
            <input
              type="text"
              name="segundo_nombre"
              value={formData.segundo_nombre}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label>Primer Apellido:</label>
            <input
              type="text"
              name="primer_apellido"
              value={formData.primer_apellido}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Segundo Apellido:</label>
            <input
              type="text"
              name="segundo_apellido"
              value={formData.segundo_apellido}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label>Género:</label>
            <select
              name="fk_id_gene"
              value={formData.fk_id_gene}
              onChange={handleChange}
              required
            >
              <option value="">Seleccione...</option>
              <option value="1">Masculino</option>
              <option value="2">Femenino</option>
              <option value="3">Otro</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Fecha Nacimiento:</label>
            <input
              type="date"
              name="fecha_naci"
              value={formData.fecha_naci}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label>Dirección:</label>
            <input
              type="text"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* SECCIÓN DOCUMENTO Y ESTADO CIVIL */}
        <div className="section">
          <h2>📋 Documentación</h2>
          <div className="form-group">
            <label>Tipo Documento:</label>
            <select
              name="fk_id_doc"
              value={formData.fk_id_doc}
              onChange={handleChange}
              required
            >
              <option value="">Seleccione...</option>
              <option value="1">Cédula de Ciudadanía</option>
              <option value="2">Tarjeta de Identidad</option>
              <option value="3">Pasaporte</option>
              <option value="4">NIT</option>
              <option value="5">Cédula de Extranjería</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Estado Civil:</label>
            <select
              name="fk_id_civil"
              value={formData.fk_id_civil}
              onChange={handleChange}
              required
            >
              <option value="">Seleccione...</option>
              <option value="1">Casado(a)</option>
              <option value="2">Soltero(a)</option>
              <option value="3">Viudo(a)</option>
              <option value="4">Separado(a)</option>
              <option value="5">Unión Libre</option>
            </select>
          </div>
        </div>

        {/* SECCIÓN ACADÉMICA */}
        <div className="section">
          <h2>🎓 Información Académica</h2>
          <div className="form-group">
            <label>Asignatura/Materia:</label>
            <input
              type="text"
              name="nombre_materia"
              value={formData.nombre_materia}
              onChange={handleChange}
              placeholder="Ej: Programación"
            />
          </div>
          
          <div className="form-group">
            <label>Aula/Salón:</label>
            <input
              type="text"
              name="nombre_aula"
              value={formData.nombre_aula}
              onChange={handleChange}
              placeholder="Ej: Salón 304, Sede 2"
            />
          </div>
          
          <div className="form-group">
            <label>Pregrado:</label>
            <input
              type="text"
              name="nombre_pregrado"
              value={formData.nombre_pregrado}
              onChange={handleChange}
              placeholder="Ej: Ingeniería de Sistemas"
            />
          </div>
          
          <div className="form-group">
            <label>Semestre:</label>
            <select
              name="fk_id_semestre"
              value={formData.fk_id_semestre}
              onChange={handleChange}
            >
              <option value="">Seleccione...</option>
              <option value="1">Primer Semestre</option>
              <option value="2">Segundo Semestre</option>
              <option value="3">Tercer Semestre</option>
              <option value="4">Cuarto Semestre</option>
              <option value="5">Quinto Semestre</option>
              <option value="6">Sexto Semestre</option>
            </select>
          </div>
        </div>

        {/* SECCIÓN LABORAL */}
        <div className="section">
          <h2>💼 Información Laboral</h2>
          <div className="form-group">
            <label>Cargo:</label>
            <input
              type="text"
              name="nombre_cargo"
              value={formData.nombre_cargo}
              onChange={handleChange}
              placeholder="Ej: Profesor, Estudiante"
            />
          </div>
          
          <div className="form-group">
            <label>Tipo Status:</label>
            <select
              name="fk_id_tipo_status"
              value={formData.fk_id_tipo_status}
              onChange={handleChange}
            >
              <option value="">Seleccione...</option>
              <option value="1">Activo</option>
              <option value="2">Inactivo</option>
              <option value="3">Vacaciones</option>
              <option value="4">Licencia</option>
            </select>
          </div>
        </div>

        {/* SECCIÓN CONTACTO */}
        <div className="section">
          <h2>📞 Contacto</h2>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label>Teléfono:</label>
            <input
              type="text"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label>Celular:</label>
            <input
              type="text"
              name="celular"
              value={formData.celular}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* SECCIÓN INSTITUCIÓN */}
        <div className="section">
          <h2>🏢 Institución/Empresa</h2>
          <div className="form-group">
            <label>Nombre Institución:</label>
            <input
              type="text"
              name="nombre_cia"
              value={formData.nombre_cia}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label>Dirección:</label>
            <input
              type="text"
              name="direccion_cia"
              value={formData.direccion_cia}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label>Teléfono:</label>
            <input
              type="text"
              name="telefono_cia"
              value={formData.telefono_cia}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="correo_cia"
              value={formData.correo_cia}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="button-container">
          <button 
            type="submit" 
            className="submit-button"
            disabled={loading}
          >
            {loading ? '⏳ Guardando...' : '💾 Guardar Registro Completo'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormularioMaestro;