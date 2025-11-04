import { PrismaClient } from "./generated/prisma/index.js";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Iniciando seed de base de datos...\n");

  try {
    // ============================================
    // 1. INSERTAR DATOS DE CATÁLOGOS SI NO EXISTEN
    // ============================================

    // Documento
    const documentoCount = await prisma.documento.count();
    if (documentoCount === 0) {
      console.log("📄 Insertando DOCUMENTO...");
      await prisma.documento.createMany({
        data: [
          { pk_id_doc: 1, nombre_documento: "Cédula de Ciudadanía", fk_id_estado: 2 },
          { pk_id_doc: 2, nombre_documento: "Tarjeta de Identidad", fk_id_estado: 2 },
          { pk_id_doc: 3, nombre_documento: "Pasaporte", fk_id_estado: 2 },
          { pk_id_doc: 4, nombre_documento: "NIT", fk_id_estado: 2 },
          { pk_id_doc: 5, nombre_documento: "Cédula de Extranjería", fk_id_estado: 2 },
          { pk_id_doc: 6, nombre_documento: "RUT", fk_id_estado: 2 },
        ],
        skipDuplicates: true,
      });
      console.log("✅ DOCUMENTO insertado\n");
    }

    // Civil
    const civilCount = await prisma.civil.count();
    if (civilCount === 0) {
      console.log("💍 Insertando CIVIL...");
      await prisma.civil.createMany({
        data: [
          { pk_id_civil: 1, nombre_civil: "Casado(a)", fk_id_estado: 2 },
          { pk_id_civil: 2, nombre_civil: "Soltero(a)", fk_id_estado: 2 },
          { pk_id_civil: 3, nombre_civil: "Viudo(a)", fk_id_estado: 2 },
          { pk_id_civil: 4, nombre_civil: "Separado(a)", fk_id_estado: 2 },
          { pk_id_civil: 5, nombre_civil: "Unión Libre", fk_id_estado: 2 },
        ],
        skipDuplicates: true,
      });
      console.log("✅ CIVIL insertado\n");
    }

    // Genero
    const generoCount = await prisma.genero.count();
    if (generoCount === 0) {
      console.log("⚧ Insertando GENERO...");
      await prisma.genero.createMany({
        data: [
          { pk_id_gene: 1, nom_genero: "Masculino", fk_id_estado: 2 },
          { pk_id_gene: 2, nom_genero: "Femenino", fk_id_estado: 2 },
          { pk_id_gene: 3, nom_genero: "Otro", fk_id_estado: 2 },
        ],
        skipDuplicates: true,
      });
      console.log("✅ GENERO insertado\n");
    }

    // ============================================
    // 2. INSERTAR PREGRADOS
    // ============================================
    const pregradoCount = await prisma.pregrado.count();
    if (pregradoCount === 0) {
      console.log("🎓 Insertando PREGRADOS...");
      await prisma.pregrado.createMany({
        data: [
          { nombre_pregrado: "Ingeniería de Sistemas" },
          { nombre_pregrado: "Administración" },
          { nombre_pregrado: "Derecho" },
          { nombre_pregrado: "Ingeniería Civil" },
          { nombre_pregrado: "Contabilidad" },
        ],
        skipDuplicates: true,
      });
      console.log("✅ PREGRADOS insertados\n");
    }

    // ============================================
    // 3. INSERTAR SEMESTRES
    // ============================================
    const semestreCount = await prisma.semestre.count();
    if (semestreCount === 0) {
      console.log("📚 Insertando SEMESTRES...");
      const pregrados = await prisma.pregrado.findMany();

      for (const pregrado of pregrados) {
        for (let i = 1; i <= 8; i++) {
          await prisma.semestre.create({
            data: {
              numero: i,
              fk_pregrado: pregrado.pk_pregrado,
            },
          });
        }
      }
      console.log("✅ SEMESTRES insertados (40 total: 8 × 5 pregrados)\n");
    }

    // ============================================
    // 4. INSERTAR TIPOS DE STATUS
    // ============================================
    const statusCount = await prisma.tipo_status.count();
    if (statusCount === 0) {
      console.log("🔴 Insertando TIPOS DE STATUS...");
      await prisma.tipo_status.createMany({
        data: [
          { nombre_status: "Activo" },
          { nombre_status: "Inactivo" },
          { nombre_status: "Suspendido" },
          { nombre_status: "Graduado" },
        ],
        skipDuplicates: true,
      });
      console.log("✅ TIPOS DE STATUS insertados\n");
    }

    // ============================================
    // RESUMEN FINAL
    // ============================================
    console.log("=" .repeat(70));
    console.log("✅ SEED COMPLETADO EXITOSAMENTE\n");

    const stats = {
      documentos: await prisma.documento.count(),
      civiles: await prisma.civil.count(),
      generos: await prisma.genero.count(),
      pregrados: await prisma.pregrado.count(),
      semestres: await prisma.semestre.count(),
      tipos_status: await prisma.tipo_status.count(),
      datos: await prisma.datos.count(),
    };

    console.log("📊 ESTADÍSTICAS DE LA BASE DE DATOS:");
    console.log(`  📄 Documentos: ${stats.documentos}`);
    console.log(`  💍 Estados Civiles: ${stats.civiles}`);
    console.log(`  ⚧ Géneros: ${stats.generos}`);
    console.log(`  🎓 Pregrados: ${stats.pregrados}`);
    console.log(`  📚 Semestres: ${stats.semestres}`);
    console.log(`  🔴 Tipos de Status: ${stats.tipos_status}`);
    console.log(`  👥 Registros de Datos: ${stats.datos}`);
    console.log("\n" + "=".repeat(70));

  } catch (error) {
    console.error("❌ Error durante seed:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
