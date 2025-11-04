import { PrismaClient } from "./src/generated/prisma/index.js";

const prisma = new PrismaClient();

async function insertarDatos() {
  console.log("🔄 Insertando datos de referencia...\n");

  try {
    // 1. Insertar PREGRADOS
    console.log("📚 Insertando PREGRADOS...");
    const pregrados = await prisma.pregrado.createMany({
      data: [
        { nombre_pregrado: "Ingeniería de Sistemas" },
        { nombre_pregrado: "Administración" },
        { nombre_pregrado: "Derecho" },
        { nombre_pregrado: "Ingeniería Civil" },
        { nombre_pregrado: "Contabilidad" },
      ],
      skipDuplicates: true,
    });
    console.log(`✅ Pregrados insertados: ${pregrados.count}\n`);

    // 2. Obtener pregrado para asociar semestres
    const pregradosData = await prisma.pregrado.findMany();
    console.log(`📖 Pregrados encontrados: ${pregradosData.length}`);

    // 3. Insertar SEMESTRES para cada PREGRADO
    console.log("\n📚 Insertando SEMESTRES...");
    let totalSemestres = 0;
    for (const pregrado of pregradosData) {
      for (let i = 1; i <= 8; i++) {
        await prisma.semestre.create({
          data: {
            numero: i,
            fk_pregrado: pregrado.pk_pregrado,
          },
        });
        totalSemestres++;
      }
    }
    console.log(`✅ Semestres insertados: ${totalSemestres}\n`);

    // 4. Insertar TIPOS DE STATUS
    console.log("🔴 Insertando TIPOS DE STATUS...");
    const statusData = await prisma.tipo_status.createMany({
      data: [
        { nombre_status: "Activo" },
        { nombre_status: "Inactivo" },
        { nombre_status: "Suspendido" },
        { nombre_status: "Graduado" },
      ],
      skipDuplicates: true,
    });
    console.log(`✅ Tipos de status insertados: ${statusData.count}\n`);

    console.log("✅ ¡TODOS LOS DATOS FUERON INSERTADOS CORRECTAMENTE!");
    console.log("\n=== DATOS INSERTADOS ===");

    // Mostrar los datos insertados
    const pregradosFinales = await prisma.pregrado.findMany();
    console.log(`\n📚 PREGRADOS (${pregradosFinales.length}):`);
    pregradosFinales.forEach((p) => {
      console.log(`  - ${p.pk_pregrado}: ${p.nombre_pregrado}`);
    });

    const semestresFinales = await prisma.semestre.findMany({
      include: { pregrado: true },
    });
    console.log(`\n📖 SEMESTRES (${semestresFinales.length}):`);
    semestresFinales.slice(0, 10).forEach((s) => {
      console.log(`  - Semestre ${s.numero} (Pregrado: ${s.pregrado?.nombre_pregrado})`);
    });
    if (semestresFinales.length > 10) {
      console.log(`  ... y ${semestresFinales.length - 10} más`);
    }

    const statusFinales = await prisma.tipo_status.findMany();
    console.log(`\n✅ TIPOS DE STATUS (${statusFinales.length}):`);
    statusFinales.forEach((s) => {
      console.log(`  - ${s.pk_status}: ${s.nombre_status}`);
    });

  } catch (error) {
    console.error("❌ Error:", error.message);
  } finally {
    await prisma.$disconnect();
  }
}

insertarDatos();
