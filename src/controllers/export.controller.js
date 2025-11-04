// Controller to build CSV based on a schedule grid similar to the provided Excel template
import XLSX from 'xlsx';

const quote = (v = "") => {
  const s = String(v ?? "");
  if (s.includes(",") || s.includes("\n") || s.includes("\"")) {
    return '"' + s.replace(/"/g, '""') + '"';
  }
  return s;
};

function buildCsvFromRegisters(registros = []) {
  const lines = [];
  
  // Encabezado
  lines.push(quote("UNIVERSIDAD"));
  lines.push(quote("FACULTAD DE INGENIERIAS: INGENIERIA"));
  lines.push(quote("CARGA ACADEMICA DOCENTE"));
  lines.push(["PERIODO", quote("2020-I")].join(","));
  lines.push("");

  // Materias: CODIGO | ASIGNATURA | INTENSIDAD HORARIA
  lines.push(["CODIGO", "ASIGNATURA", "INTENSIDAD HORARIA"].join(","));
  
  // Extraer materias únicas y sus intensidades de los registros
  const materiasMap = {};
  registros.forEach((reg) => {
    if (reg.nombre_materia || reg.asignatura) {
      const key = reg.nombre_materia || reg.asignatura;
      if (!materiasMap[key]) {
        materiasMap[key] = {
          codigo: reg.codigo_materia || "",
          asignatura: key,
          intensidad: reg.intensidad_horaria || 3,
        };
      }
    }
  });

  Object.values(materiasMap).forEach((m) => {
    lines.push([
      quote(m.codigo || ""),
      quote(m.asignatura || ""),
      quote(m.intensidad ?? 0),
    ].join(","));
  });

  // Total intensidad
  if (Object.keys(materiasMap).length) {
    const total = Object.values(materiasMap).reduce((acc, m) => acc + (Number(m.intensidad) || 0), 0);
    lines.push(["", "", quote(total)].join(","));
  }
  lines.push("");

  // Grid horario: HORA | LUNES..VIERNES
  const days = ["LUNES", "MARTES", "MIERCOLES", "JUEVES", "VIERNES"];
  lines.push(["HORA", ...days].join(","));

  // Slots de tiempo por defecto
  const defaultSlots = [
    "7:00-8:00",
    "8:00-9:00",
    "9:00-10:00",
    "10:00-11:00",
    "11:00-12:00",
    "12:00-13:00",
    "13:00-14:00",
    "14:00-15:00",
    "15:00-16:00",
    "16:00-17:00",
  ];

  // Construir grid con registros que tienen horario
  const grid = {};
  defaultSlots.forEach((slot) => {
    grid[slot] = {};
    days.forEach((d) => {
      grid[slot][d] = "";
    });
  });

  // Llenar el grid con datos de registros que tengan horario
  registros.forEach((reg) => {
    if (reg.dia && reg.hora_inicio && reg.hora_fin) {
      const slotKey = `${reg.hora_inicio}-${reg.hora_fin}`;
      const dayKey = String(reg.dia || "").toUpperCase();
      if (grid[slotKey]) {
        grid[slotKey][dayKey] = `${reg.nombre_materia || reg.asignatura || ""} ${reg.nombre_aula || reg.salon || ""}`.trim();
      }
    }
  });

  // Agregar filas de horario
  defaultSlots.forEach((slot) => {
    const row = [quote(slot)];
    days.forEach((d) => row.push(quote(grid[slot][d] || "")));
    lines.push(row.join(","));
  });

  return lines.join("\n");
}

function buildStudentDetailsCsv(registros = []) {
  const lines = [];

  // Encabezado
  lines.push(quote("UNIVERSIDAD"));
  lines.push(quote("FACULTAD DE INGENIERIAS: INGENIERIA"));
  lines.push(quote("REGISTRO DE ESTUDIANTES Y HORARIOS"));
  lines.push(["PERIODO", quote("2020-I")].join(","));
  lines.push("");

  // Tabla de estudiantes con detalles
  lines.push([
    "ID",
    "NOMBRE",
    "APELLIDO",
    "MATERIA",
    "SALON",
    "SEDE",
    "DIA",
    "HORA INICIO",
    "HORA FIN",
    "CORREO",
    "TELEFONO"
  ].join(","));

  // Agregar datos de estudiantes
  registros.forEach((reg) => {
    if (reg.nombre && reg.apellido) {
      const diaLabel = (reg.dia || "N/A").toUpperCase();
      const horaInicio = reg.hora_inicio || "N/A";
      const horaFin = reg.hora_fin || "N/A";
      
      lines.push([
        quote(reg.pk_dato || ""),
        quote(reg.nombre || ""),
        quote(reg.apellido || ""),
        quote(reg.asignatura || reg.nombre_materia || ""),
        quote(reg.salon || reg.nombre_aula || ""),
        quote(reg.sede || "Sede Principal"),
        quote(diaLabel),
        quote(horaInicio),
        quote(horaFin),
        quote(reg.correo || ""),
        quote(reg.telefono || "")
      ].join(","));
    }
  });

  lines.push("");
  lines.push(["TOTAL DE REGISTROS", quote(registros.length)].join(","));

  return lines.join("\n");
}

function buildCompleteStudentExcelWorkbook(registros = []) {
  // Crear workbook con múltiples hojas
  const workbook = XLSX.utils.book_new();

  // ============================================
  // HOJA 1: INFORMACIÓN COMPLETA DE ESTUDIANTES
  // ============================================
  const completeStudentsData = [];

  registros.forEach((reg) => {
    if (reg.nombre && reg.apellido) {
      completeStudentsData.push({
        "ID": reg.pk_dato || "",
        "NOMBRE": reg.nombre || "",
        "APELLIDO": reg.apellido || "",
        "TIPO DOCUMENTO": reg.documento?.nombre_documento || "",
        "ESTADO CIVIL": reg.civil?.nombre_civil || "",
        "GÉNERO": reg.genero?.nom_genero || "",
        "CORREO": reg.correo || "",
        "TELÉFONO": reg.telefono || "",
        "MATERIA/ASIGNATURA": reg.asignatura || "",
        "SALÓN": reg.salon || "",
        "PREGRADO": reg.pregrado?.nombre_pregrado || "",
        "SEMESTRE": reg.semestre?.numero || "",
        "STATUS": reg.tipo_status?.nombre_status || "",
        "DÍA": (reg.dia || "N/A").toUpperCase(),
        "HORA INICIO": reg.hora_inicio || "",
        "HORA FIN": reg.hora_fin || "",
      });
    }
  });

  const worksheetCompleto = XLSX.utils.json_to_sheet(completeStudentsData);
  
  // Ajustar ancho de columnas para hoja completa
  const colWidths = [
    { wch: 8 },   // ID
    { wch: 15 },  // NOMBRE
    { wch: 15 },  // APELLIDO
    { wch: 18 },  // TIPO DOCUMENTO
    { wch: 15 },  // ESTADO CIVIL
    { wch: 12 },  // GÉNERO
    { wch: 20 },  // CORREO
    { wch: 15 },  // TELÉFONO
    { wch: 20 },  // MATERIA/ASIGNATURA
    { wch: 15 },  // SALÓN
    { wch: 20 },  // PREGRADO
    { wch: 12 },  // SEMESTRE
    { wch: 12 },  // STATUS
    { wch: 12 },  // DÍA
    { wch: 14 },  // HORA INICIO
    { wch: 14 },  // HORA FIN
  ];
  worksheetCompleto['!cols'] = colWidths;

  // Dar formato a header
  const rangeCompleto = XLSX.utils.decode_range(worksheetCompleto['!ref']);
  for (let C = rangeCompleto.s.c; C <= rangeCompleto.e.c; ++C) {
    const address = XLSX.utils.encode_col(C) + "1";
    if (!worksheetCompleto[address]) continue;
    worksheetCompleto[address].s = {
      font: { bold: true, color: { rgb: "FFFFFF" }, size: 11 },
      fill: { fgColor: { rgb: "1e3c72" } },
      alignment: { horizontal: "center", vertical: "center", wrapText: true }
    };
  }

  // Congelar primera fila
  worksheetCompleto['!freeze'] = { xSplit: 0, ySplit: 1 };

  XLSX.utils.book_append_sheet(workbook, worksheetCompleto, "Información Completa");

  // ============================================
  // HOJA 2: RESUMEN POR HORARIO
  // ============================================
  const scheduleData = [];
  const days = ["LUNES", "MARTES", "MIERCOLES", "JUEVES", "VIERNES"];
  const defaultSlots = [
    "7:00-8:00", "8:00-9:00", "9:00-10:00", "10:00-11:00", "11:00-12:00",
    "12:00-13:00", "13:00-14:00", "14:00-15:00", "15:00-16:00", "16:00-17:00",
  ];

  const grid = {};
  defaultSlots.forEach((slot) => {
    grid[slot] = {};
    days.forEach((d) => {
      grid[slot][d] = [];
    });
  });

  // Llenar el grid con datos
  registros.forEach((reg) => {
    if (reg.dia && reg.hora_inicio && reg.hora_fin) {
      const slotKey = `${reg.hora_inicio}-${reg.hora_fin}`;
      const dayKey = String(reg.dia || "").toUpperCase();
      if (grid[slotKey] && grid[slotKey][dayKey]) {
        grid[slotKey][dayKey].push({
          estudiante: `${reg.nombre} ${reg.apellido}`,
          materia: reg.asignatura || reg.nombre_materia || "",
          salon: reg.salon || reg.nombre_aula || "",
        });
      }
    }
  });

  // Construir datos para la hoja de horarios
  defaultSlots.forEach((slot) => {
    const row = { "HORA": slot };
    days.forEach((d) => {
      const classList = grid[slot][d];
      if (classList.length > 0) {
        row[d] = classList
          .map(c => `${c.estudiante} - ${c.materia} (${c.salon})`)
          .join("\n");
      } else {
        row[d] = "";
      }
    });
    scheduleData.push(row);
  });

  const worksheetHorario = XLSX.utils.json_to_sheet(scheduleData);
  
  const colWidthsHorario = [
    { wch: 12 },  // HORA
    { wch: 25 },  // LUNES
    { wch: 25 },  // MARTES
    { wch: 25 },  // MIERCOLES
    { wch: 25 },  // JUEVES
    { wch: 25 },  // VIERNES
  ];
  worksheetHorario['!cols'] = colWidthsHorario;

  // Dar formato a header
  const rangeHorario = XLSX.utils.decode_range(worksheetHorario['!ref']);
  for (let C = rangeHorario.s.c; C <= rangeHorario.e.c; ++C) {
    const address = XLSX.utils.encode_col(C) + "1";
    if (!worksheetHorario[address]) continue;
    worksheetHorario[address].s = {
      font: { bold: true, color: { rgb: "FFFFFF" }, size: 11 },
      fill: { fgColor: { rgb: "2a5298" } },
      alignment: { horizontal: "center", vertical: "center", wrapText: true }
    };
  }

  worksheetHorario['!freeze'] = { xSplit: 1, ySplit: 1 };

  XLSX.utils.book_append_sheet(workbook, worksheetHorario, "Horarios");

  // ============================================
  // HOJA 3: ESTADÍSTICAS
  // ============================================
  const statsData = [
    { "Métrica": "Total de Estudiantes", "Cantidad": registros.length },
    { "Métrica": "Total de Materias", "Cantidad": [...new Set(registros.map(r => r.asignatura || r.nombre_materia || ""))].filter(m => m).length },
    { "Métrica": "Total de Salones", "Cantidad": [...new Set(registros.map(r => r.salon || r.nombre_aula || ""))].filter(s => s).length },
    { "Métrica": "Género Masculino", "Cantidad": registros.filter(r => r.nombre_genero === "Masculino").length },
    { "Métrica": "Género Femenino", "Cantidad": registros.filter(r => r.nombre_genero === "Femenino").length },
  ];

  const worksheetStats = XLSX.utils.json_to_sheet(statsData);
  worksheetStats['!cols'] = [{ wch: 25 }, { wch: 15 }];

  const rangeStats = XLSX.utils.decode_range(worksheetStats['!ref']);
  for (let C = rangeStats.s.c; C <= rangeStats.e.c; ++C) {
    const address = XLSX.utils.encode_col(C) + "1";
    if (!worksheetStats[address]) continue;
    worksheetStats[address].s = {
      font: { bold: true, color: { rgb: "FFFFFF" }, size: 11 },
      fill: { fgColor: { rgb: "10b981" } },
      alignment: { horizontal: "center", vertical: "center" }
    };
  }

  XLSX.utils.book_append_sheet(workbook, worksheetStats, "Estadísticas");

  return workbook;
}

export const ExportController = {
  // POST /api/export/csv - Exportar horario académico
  csv(req, res) {
    try {
      const { registros = [] } = req.body;
      const csv = buildCsvFromRegisters(registros);
      res.setHeader("Content-Type", "text/csv; charset=utf-8");
      res.setHeader("Content-Disposition", "attachment; filename=horario_academico.csv");
      return res.status(200).send(csv);
    } catch (err) {
      console.error("Error building CSV:", err);
      return res.status(400).json({ message: "No fue posible generar el CSV" });
    }
  },

  // POST /api/export/csv-estudiantes - Exportar detalles de estudiantes
  csvEstudiantes(req, res) {
    try {
      const { registros = [] } = req.body;
      const csv = buildStudentDetailsCsv(registros);
      res.setHeader("Content-Type", "text/csv; charset=utf-8");
      res.setHeader("Content-Disposition", "attachment; filename=registro_estudiantes_horarios.csv");
      return res.status(200).send(csv);
    } catch (err) {
      console.error("Error building CSV:", err);
      return res.status(400).json({ message: "No fue posible generar el CSV" });
    }
  },

  // POST /api/export/excel - Exportar todo a Excel con múltiples hojas (Solo ESTUDIANTES)
  excel(req, res) {
    try {
      let { registros = [] } = req.body;
      
      // 🔍 Filtrar solo ESTUDIANTES (excluir maestros)
      registros = registros.filter(
        (reg) => !reg.tipo_usuario || reg.tipo_usuario === "ESTUDIANTE"
      );
      
      if (registros.length === 0) {
        return res.status(400).json({ message: "No hay estudiantes para exportar" });
      }
      
      const workbook = buildCompleteStudentExcelWorkbook(registros);
      
      // Generar buffer
      const buffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
      
      res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
      res.setHeader("Content-Disposition", "attachment; filename=reporte_completo_estudiantes.xlsx");
      return res.status(200).send(buffer);
    } catch (err) {
      console.error("Error building Excel:", err);
      return res.status(400).json({ message: "No fue posible generar el Excel" });
    }
  },
};

export default ExportController;
