import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

// Configuración base de axios
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const datosService = {
  // Obtener todos los registros
  getAll: async () => {
    try {
      const response = await api.get('/datos');
      return response.data;
    } catch (error) {
      console.error('Error al obtener todos los datos:', error);
      throw error;
    }
  },

  // Obtener registro por ID
  getById: async (id) => {
    try {
      const response = await api.get(`/datos/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error al obtener dato con ID ${id}:`, error);
      throw error;
    }
  },

  // Crear nuevo registro
  create: async (data) => {
    try {
      const response = await api.post('/datos', data);
      return response.data;
    } catch (error) {
      console.error('Error al crear nuevo dato:', error);
      throw error;
    }
  },

  // Actualizar registro existente
  update: async (id, data) => {
    try {
      const response = await api.put(`/datos/${id}`, data);
      return response.data;
    } catch (error) {
      console.error(`Error al actualizar dato con ID ${id}:`, error);
      throw error;
    }
  },

  // Eliminar registro
  delete: async (id) => {
    try {
      await api.delete(`/datos/${id}`);
      return true;
    } catch (error) {
      console.error(`Error al eliminar dato con ID ${id}:`, error);
      throw error;
    }
  }
};

export default datosService;