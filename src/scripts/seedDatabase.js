import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

async function seedDatabase() {
  console.log("🌱 Iniciando seeding de la base de datos...");

  try {
    // Verificar y crear estados si no existen
    const estados = await prisma.estado.findMany();
    if (estados.length === 0) {
      console.log("📝 Insertando estados...");
      await prisma.estado.createMany({
        data: [
          { pk_id_estado: 1, nombre: "grabado" },
          { pk_id_estado: 2, nombre: "actualizado" },
          { pk_id_estado: 3, nombre: "borrado" },
          { pk_id_estado: 4, nombre: "deshacer" },
          { pk_id_estado: 5, nombre: "no acceso" },
        ],
      });
      console.log("✅ Estados insertados");
    } else {
      console.log("ℹ️ Estados ya existen");
    }

    // Verificar y crear documentos si no existen
    const documentos = await prisma.documento.findMany();
    if (documentos.length === 0) {
      console.log("📝 Insertando documentos...");
      await prisma.documento.createMany({
        data: [
          { pk_id_doc: 1, nombre_documento: "Cédula de Ciudadanía", fk_id_estado: 2 },
          { pk_id_doc: 2, nombre_documento: "Tarjeta de Identidad", fk_id_estado: 2 },
          { pk_id_doc: 3, nombre_documento: "Pasaporte", fk_id_estado: 2 },
          { pk_id_doc: 4, nombre_documento: "NIT", fk_id_estado: 2 },
          { pk_id_doc: 5, nombre_documento: "Cédula de Extranjería", fk_id_estado: 2 },
          { pk_id_doc: 6, nombre_documento: "RUT", fk_id_estado: 2 },
        ],
      });
      console.log("✅ Documentos insertados");
    } else {
      console.log("ℹ️ Documentos ya existen");
    }

    // Verificar y crear géneros si no existen
    const generos = await prisma.genero.findMany();
    if (generos.length === 0) {
      console.log("📝 Insertando géneros...");
      await prisma.genero.createMany({
        data: [
          { pk_id_gene: 1, nom_genero: "Masculino", fk_id_estado: 2 },
          { pk_id_gene: 2, nom_genero: "Femenino", fk_id_estado: 2 },
          { pk_id_gene: 3, nom_genero: "Otro", fk_id_estado: 2 },
        ],
      });
      console.log("✅ Géneros insertados");
    } else {
      console.log("ℹ️ Géneros ya existen");
    }

    // Verificar y crear estados civiles si no existen
    const civiles = await prisma.civil.findMany();
    if (civiles.length === 0) {
      console.log("📝 Insertando estados civiles...");
      await prisma.civil.createMany({
        data: [
          { pk_id_civil: 1, nombre_civil: "Casado(a)", fk_id_estado: 2 },
          { pk_id_civil: 2, nombre_civil: "Soltero(a)", fk_id_estado: 2 },
          { pk_id_civil: 3, nombre_civil: "Viudo(a)", fk_id_estado: 2 },
          { pk_id_civil: 4, nombre_civil: "Separado(a)", fk_id_estado: 2 },
          { pk_id_civil: 5, nombre_civil: "Unión Libre", fk_id_estado: 2 },
        ],
      });
      console.log("✅ Estados civiles insertados");
    } else {
      console.log("ℹ️ Estados civiles ya existen");
    }

    console.log("\n✅ 🌱 Seeding completado exitosamente!");
  } catch (error) {
    console.error("❌ Error durante el seeding:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

// Ejecutar el seeding
seedDatabase();
