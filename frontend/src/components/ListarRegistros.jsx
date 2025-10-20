import React, { useState, useEffect } from 'react';
import { datosService } from '../services/datosService';

const ListarRegistros = () => {
  const [registros, setRegistros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});

  useEffect(() => {
    cargarRegistros();
  }, []);

  const cargarRegistros = async () => {
    try {
      setLoading(true);
      const data = await datosService.getAll();
      setRegistros(data);
      setError('');
    } catch (error) {
      console.error('Error al cargar registros:', error);
      setError('Error al cargar los registros');
    } finally {
      setLoading(false);
    }
  };

  const handleEliminar = async (id) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este registro?')) {
      try {
        await datosService.delete(id);
        setRegistros(registros.filter(registro => registro.pk_dato !== id));
        alert('✅ Registro eliminado exitosamente');
      } catch (error) {
        console.error('Error al eliminar:', error);
        alert('❌ Error al eliminar el registro');
      }
    }
  };

  const handleEditar = (registro) => {
    setEditingId(registro.pk_dato);
    setEditData({
      nombre: registro.nombre || '',
      apellido: registro.apellido || '',
      fk_id_doc: registro.fk_id_doc || '',
      fk_id_civil: registro.fk_id_civil || '',
      fk_id_gene: registro.fk_id_gene || ''
    });
  };

  const handleCancelarEdicion = () => {
    setEditingId(null);
    setEditData({});
  };

  const handleGuardarEdicion = async (id) => {
    try {
      const registroActualizado = await datosService.update(id, editData);
      setRegistros(registros.map(registro => 
        registro.pk_dato === id ? { ...registro, ...registroActualizado } : registro
      ));
      setEditingId(null);
      setEditData({});
      alert('✅ Registro actualizado exitosamente');
    } catch (error) {
      console.error('Error al actualizar:', error);
      alert('❌ Error al actualizar el registro');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const exportarExcel = () => {
    // Simulación de exportación a Excel (en un proyecto real usarías una librería como xlsx)
    const csvContent = "data:text/csv;charset=utf-8," 
      + "ID,Nombre,Apellido,Documento,Estado Civil,Género\n"
      + registros.map(registro => 
          `${registro.pk_dato},"${registro.nombre}","${registro.apellido}",${registro.fk_id_doc},${registro.fk_id_civil},${registro.fk_id_gene}`
        ).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "registros_academicos.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">⏳</div>
        <p>Cargando registros...</p>
      </div>
    );
  }

  return (
    <div className="lista-registros-container">
      <div className="header-section">
        <h1>📋 Todos los Registros Académicos</h1>
        <div className="action-buttons">
          <button onClick={cargarRegistros} className="refresh-button">
            🔄 Actualizar
          </button>
          <button onClick={exportarExcel} className="export-button">
            📊 Descargar CSV
          </button>
        </div>
      </div>

      {error && (
        <div className="error-message">
          ❌ {error}
        </div>
      )}

      {registros.length === 0 ? (
        <div className="no-records">
          <p>📭 No hay registros disponibles</p>
          <p>¡Crea tu primer registro usando el formulario!</p>
        </div>
      ) : (
        <div className="table-container">
          <table className="registros-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Tipo Documento</th>
                <th>Estado Civil</th>
                <th>Género</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {registros.map((registro) => (
                <tr key={registro.pk_dato}>
                  <td>{registro.pk_dato}</td>
                  <td>
                    {editingId === registro.pk_dato ? (
                      <input
                        type="text"
                        name="nombre"
                        value={editData.nombre}
                        onChange={handleInputChange}
                        className="edit-input"
                      />
                    ) : (
                      registro.nombre || 'N/A'
                    )}
                  </td>
                  <td>
                    {editingId === registro.pk_dato ? (
                      <input
                        type="text"
                        name="apellido"
                        value={editData.apellido}
                        onChange={handleInputChange}
                        className="edit-input"
                      />
                    ) : (
                      registro.apellido || 'N/A'
                    )}
                  </td>
                  <td>
                    {editingId === registro.pk_dato ? (
                      <select
                        name="fk_id_doc"
                        value={editData.fk_id_doc}
                        onChange={handleInputChange}
                        className="edit-select"
                      >
                        <option value="">Seleccione...</option>
                        <option value="1">Cédula de Ciudadanía</option>
                        <option value="2">Tarjeta de Identidad</option>
                        <option value="3">Pasaporte</option>
                        <option value="4">NIT</option>
                        <option value="5">Cédula de Extranjería</option>
                      </select>
                    ) : (
                      (() => {
                        const docTypes = {
                          1: 'Cédula de Ciudadanía',
                          2: 'Tarjeta de Identidad',
                          3: 'Pasaporte',
                          4: 'NIT',
                          5: 'Cédula de Extranjería'
                        };
                        return docTypes[registro.fk_id_doc] || 'N/A';
                      })()
                    )}
                  </td>
                  <td>
                    {editingId === registro.pk_dato ? (
                      <select
                        name="fk_id_civil"
                        value={editData.fk_id_civil}
                        onChange={handleInputChange}
                        className="edit-select"
                      >
                        <option value="">Seleccione...</option>
                        <option value="1">Casado(a)</option>
                        <option value="2">Soltero(a)</option>
                        <option value="3">Viudo(a)</option>
                        <option value="4">Separado(a)</option>
                        <option value="5">Unión Libre</option>
                      </select>
                    ) : (
                      (() => {
                        const civilTypes = {
                          1: 'Casado(a)',
                          2: 'Soltero(a)',
                          3: 'Viudo(a)',
                          4: 'Separado(a)',
                          5: 'Unión Libre'
                        };
                        return civilTypes[registro.fk_id_civil] || 'N/A';
                      })()
                    )}
                  </td>
                  <td>
                    {editingId === registro.pk_dato ? (
                      <select
                        name="fk_id_gene"
                        value={editData.fk_id_gene}
                        onChange={handleInputChange}
                        className="edit-select"
                      >
                        <option value="">Seleccione...</option>
                        <option value="1">Masculino</option>
                        <option value="2">Femenino</option>
                        <option value="3">Otro</option>
                      </select>
                    ) : (
                      (() => {
                        const genderTypes = {
                          1: 'Masculino',
                          2: 'Femenino',
                          3: 'Otro'
                        };
                        return genderTypes[registro.fk_id_gene] || 'N/A';
                      })()
                    )}
                  </td>
                  <td>
                    <div className="action-buttons-cell">
                      {editingId === registro.pk_dato ? (
                        <>
                          <button
                            onClick={() => handleGuardarEdicion(registro.pk_dato)}
                            className="save-button"
                            title="Guardar cambios"
                          >
                            ✅
                          </button>
                          <button
                            onClick={handleCancelarEdicion}
                            className="cancel-button"
                            title="Cancelar edición"
                          >
                            ❌
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => handleEditar(registro)}
                            className="edit-button"
                            title="Editar registro"
                          >
                            ✏️
                          </button>
                          <button
                            onClick={() => handleEliminar(registro.pk_dato)}
                            className="delete-button"
                            title="Eliminar registro"
                          >
                            🗑️
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="summary-section">
        <p>📊 Total de registros: <strong>{registros.length}</strong></p>
      </div>
    </div>
  );
};

export default ListarRegistros;