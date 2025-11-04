import axios from 'axios';

const API_URL = 'http://localhost:3000/api/export';

export const exportService = {
  async downloadCsv(registros = []) {
    try {
      const res = await axios.post(`${API_URL}/csv`, { registros }, {
        responseType: 'blob',
        headers: { 'Content-Type': 'application/json' },
      });

      const blob = new Blob([res.data], { type: 'text/csv;charset=utf-8;' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'horario_academico.csv');
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
      return true;
    } catch (error) {
      console.error('Error al descargar CSV:', error);
      throw error;
    }
  },

  async downloadCsvEstudiantes(registros = []) {
    try {
      const res = await axios.post(`${API_URL}/csv-estudiantes`, { registros }, {
        responseType: 'blob',
        headers: { 'Content-Type': 'application/json' },
      });

      const blob = new Blob([res.data], { type: 'text/csv;charset=utf-8;' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'registro_estudiantes_horarios.csv');
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
      return true;
    } catch (error) {
      console.error('Error al descargar CSV de estudiantes:', error);
      throw error;
    }
  },

  async downloadExcel(registros = []) {
    try {
      const res = await axios.post(`${API_URL}/excel`, { registros }, {
        responseType: 'blob',
        headers: { 'Content-Type': 'application/json' },
      });

      const blob = new Blob([res.data], { 
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' 
      });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'reporte_completo_estudiantes.xlsx');
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
      return true;
    } catch (error) {
      console.error('Error al descargar Excel:', error);
      throw error;
    }
  },
};

export default exportService;
