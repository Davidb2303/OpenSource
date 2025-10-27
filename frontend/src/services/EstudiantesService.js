import axios from 'axios';

const API_URL = 'http://localhost:3000/api/estudiantes';

export const estudiantesService = {
  async create(data) {
    const res = await axios.post(API_URL, data);
    return res.data;
  },

  async findAll() {
    const res = await axios.get(API_URL);
    return res.data;
  },

  async findById(id) {
    const res = await axios.get(`${API_URL}/${id}`);
    return res.data;
  },

  async update(id, data) {
    const res = await axios.put(`${API_URL}/${id}`, data);
    return res.data;
  },

  async remove(id) {
    await axios.delete(`${API_URL}/${id}`);
  },
};
