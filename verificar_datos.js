import { PrismaClient } from "./src/generated/prisma/index.js";

const prisma = new PrismaClient();

async function verificar() {
  console.log("=== VERIFICANDO DATOS DE REFERENCIA ===\n");

  try {
    // Verificar documento
    const docs = await prisma.documento.findMany();
    console.log("📄 DOCUMENTO:");
    console.log(docs);
    console.log("");

    // Verificar civil
    const civiles = await prisma.civil.findMany();
    console.log("💍 CIVIL:");
    console.log(civiles);
    console.log("");

    // Verificar genero
    const generos = await prisma.genero.findMany();
    console.log("⚧ GENERO:");
    console.log(generos);
    console.log("");

    // Verificar pregrado
    const pregrados = await prisma.pregrado.findMany();
    console.log("🎓 PREGRADO:");
    console.log(pregrados);
    console.log("");

    // Verificar semestre
    const semestres = await prisma.semestre.findMany();
    console.log("📚 SEMESTRE:");
    console.log(semestres);
    console.log("");

    // Verificar tipo_status
    const status = await prisma.tipo_status.findMany();
    console.log("✅ TIPO_STATUS:");
    console.log(status);
    console.log("");

    // Contar datos
    const totalDatos = await prisma.datos.findMany();
    console.log(`📊 Total de registros en DATOS: ${totalDatos.length}`);

  } catch (error) {
    console.error("❌ Error:", error.message);
  } finally {
    await prisma.$disconnect();
  }
}

verificar();
