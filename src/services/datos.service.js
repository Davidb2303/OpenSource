import { PrismaClient } from "../generated/prisma/index.js";
const prisma = new PrismaClient();

export const DatosService = {
  async findAll() {
    return prisma.datos.findMany();
  },

  async findById(id) {
    return prisma.datos.findUnique({ where: { pk_dato: Number(id) } });
  },

  async create(data) {
    return prisma.datos.create({ data });
  },

  async update(id, data) {
    return prisma.datos.update({
      where: { pk_dato: Number(id) },
      data,
    });
  },

  async remove(id) {
    return prisma.datos.delete({ where: { pk_dato: Number(id) } });
  },
};
