import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const DatosService = {
  async findAll() {
    return prisma.datos.findMany();
  },

  async findById(id) {
    return prisma.datos.findUnique({ where: { id: Number(id) } });
  },

  async create(data) {
    return prisma.datos.create({ data });
  },

  async update(id, data) {
    return prisma.datos.update({
      where: { id: Number(id) },
      data,
    });
  },

  async remove(id) {
    return prisma.datos.delete({ where: { id: Number(id) } });
  },
};
