import { PrismaClient } from "./src/generated/prisma/index.js";

const prisma = new PrismaClient();

async function mostrarIDsSemestres() {
  console.log("📚 IDs DE SEMESTRES POR PREGRADO\n");
  console.log("=" .repeat(70));

  try {
    const pregrados = await prisma.pregrado.findMany({
      include: {
        semestre: {
          select: {
            pk_semestre: true,
            numero: true,
          },
          orderBy: { numero: "asc" },
        },
      },
    });

    pregrados.forEach((pregrado) => {
      console.log(
        `\n🎓 ${pregrado.pk_pregrado}. ${pregrado.nombre_pregrado}`
      );
      console.log("-".repeat(70));

      if (pregrado.semestre.length === 0) {
        console.log("  ❌ Sin semestres");
      } else {
        console.log("  📖 Semestres disponibles:");
        pregrado.semestre.forEach((sem) => {
          console.log(`     - ID: ${sem.pk_semestre} → Semestre ${sem.numero}`);
        });
      }
    });

    console.log("\n" + "=".repeat(70));
    console.log("\n✅ EJEMPLOS PARA EL FORMULARIO:\n");

    console.log("Ejemplo 1: Ingeniería de Sistemas, Semestre 3");
    console.log("  - Pregrado: 1");
    console.log("  - Semestre ID: 3 (el ID de semestre 3 de Ingeniería)\n");

    console.log("Ejemplo 2: Administración, Semestre 5");
    console.log("  - Pregrado: 2");
    console.log("  - Semestre ID: [busca en la lista anterior]\n");

    console.log("Ejemplo 3: Derecho, Semestre 1");
    console.log("  - Pregrado: 3");
    console.log("  - Semestre ID: [busca en la lista anterior]\n");

  } catch (error) {
    console.error("❌ Error:", error.message);
  } finally {
    await prisma.$disconnect();
  }
}

mostrarIDsSemestres();
