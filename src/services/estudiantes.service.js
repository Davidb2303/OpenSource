import { PrismaClient } from "../generated/prisma/index.js";
const prisma = new PrismaClient();

export const EstudiantesService = {
  async findAll() {
    return prisma.datos.findMany({
      include: {
        documento: true,
        civil: true,
        genero: true,
        pregrado: true,
        semestre: true,
        tipo_status: true,
      },
    });
  },

  async findById(id) {
    return prisma.datos.findUnique({
      where: { pk_dato: Number(id) },
      include: {
        documento: true,
        civil: true,
        genero: true,
        pregrado: true,
        semestre: true,
        tipo_status: true,
      },
    });
  },

  async create(data) {
    return prisma.datos.create({ data });
  },

  async update(id, data) {
    return prisma.datos.update({ where: { pk_dato: Number(id) }, data });
  },

  async remove(id) {
    return prisma.datos.delete({ where: { pk_dato: Number(id) } });
  },
};
