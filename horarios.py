import polars as pl
from sqlalchemy import create_engine, text


DB_USER = "root"
DB_PASS = "Alejito2006***"
DB_HOST = "localhost"
DB_PORT = 3306
DB_NAME = "sscd_horarios"

DB_URL = f"mysql+pymysql://{DB_USER}:{DB_PASS}@{DB_HOST}:{DB_PORT}/{DB_NAME}"
engine = create_engine(DB_URL)


TABLES_SQL = [
    """
    CREATE TABLE IF NOT EXISTS estado (
        pk_id_estado INT PRIMARY KEY,
        nombre VARCHAR(50)
    )
    """,
    """
    CREATE TABLE IF NOT EXISTS civil (
        pk_id_civil INT PRIMARY KEY,
        nombre_civil VARCHAR(50),
        fk_id_estado INT,
        FOREIGN KEY (fk_id_estado) REFERENCES estado(pk_id_estado)
    )
    """,
    """
    CREATE TABLE IF NOT EXISTS documento (
        pk_id_doc INT PRIMARY KEY,
        nombre_documento VARCHAR(100),
        fk_id_estado INT,
        FOREIGN KEY (fk_id_estado) REFERENCES estado(pk_id_estado)
    )
    """,
    """
    CREATE TABLE IF NOT EXISTS genero (
        pk_id_gene INT PRIMARY KEY,
        nom_genero VARCHAR(50),
        fk_id_estado INT,
        FOREIGN KEY (fk_id_estado) REFERENCES estado(pk_id_estado)
    )
    """,
    """
    CREATE TABLE IF NOT EXISTS modulos (
        pk_modulos INT PRIMARY KEY,
        nombre VARCHAR(100)
    )
    """,
    """
    CREATE TABLE IF NOT EXISTS acceso (
        pk_acceso INT AUTO_INCREMENT PRIMARY KEY,
        usuario VARCHAR(50),
        contrasena VARCHAR(100),
        fk_modulo INT,
        FOREIGN KEY (fk_modulo) REFERENCES modulos(pk_modulos)
    )
    """,
    """
    CREATE TABLE IF NOT EXISTS asignaturas (
        pk_asignatura INT AUTO_INCREMENT PRIMARY KEY,
        nombre_asignatura VARCHAR(100),
        codigo VARCHAR(20)
    )
    """,
    """
    CREATE TABLE IF NOT EXISTS aulas (
        pk_aula INT AUTO_INCREMENT PRIMARY KEY,
        nombre_aula VARCHAR(50),
        capacidad INT
    )
    """,
    """
    CREATE TABLE IF NOT EXISTS cargo (
        pk_cargo INT AUTO_INCREMENT PRIMARY KEY,
        nombre_cargo VARCHAR(50)
    )
    """,
    """
    CREATE TABLE IF NOT EXISTS cia (
        pk_cia INT AUTO_INCREMENT PRIMARY KEY,
        nombre_cia VARCHAR(100),
        direccion VARCHAR(150),
        telefono VARCHAR(20)
    )
    """,
    """
    CREATE TABLE IF NOT EXISTS datos (
        pk_dato INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(50),
        apellido VARCHAR(50),
        fk_id_doc INT,
        documento VARCHAR(50),
        fk_id_civil INT,
        fk_id_gene INT,
        FOREIGN KEY (fk_id_doc) REFERENCES documento(pk_id_doc),
        FOREIGN KEY (fk_id_civil) REFERENCES civil(pk_id_civil),
        FOREIGN KEY (fk_id_gene) REFERENCES genero(pk_id_gene)
    )
    """,
    """
    CREATE TABLE IF NOT EXISTS horarios (
        pk_horario INT AUTO_INCREMENT PRIMARY KEY,
        dia VARCHAR(20),
        hora_inicio TIME,
        hora_fin TIME
    )
    """,
    """
    CREATE TABLE IF NOT EXISTS laboratorio (
        pk_lab INT AUTO_INCREMENT PRIMARY KEY,
        nombre_lab VARCHAR(100),
        capacidad INT
    )
    """,
    """
    CREATE TABLE IF NOT EXISTS mov_asig_au (
        pk_mov INT AUTO_INCREMENT PRIMARY KEY,
        fk_asignatura INT,
        fk_aula INT,
        fk_horario INT,
        FOREIGN KEY (fk_asignatura) REFERENCES asignaturas(pk_asignatura),
        FOREIGN KEY (fk_aula) REFERENCES aulas(pk_aula),
        FOREIGN KEY (fk_horario) REFERENCES horarios(pk_horario)
    )
    """,
    """
    CREATE TABLE IF NOT EXISTS pregrado (
        pk_pregrado INT AUTO_INCREMENT PRIMARY KEY,
        nombre_pregrado VARCHAR(100)
    )
    """,
    """
    CREATE TABLE IF NOT EXISTS preofe_mate (
        pk_preofe INT AUTO_INCREMENT PRIMARY KEY,
        fk_pregrado INT,
        fk_asignatura INT,
        FOREIGN KEY (fk_pregrado) REFERENCES pregrado(pk_pregrado),
        FOREIGN KEY (fk_asignatura) REFERENCES asignaturas(pk_asignatura)
    )
    """,
    """
    CREATE TABLE IF NOT EXISTS semestre (
        pk_semestre INT AUTO_INCREMENT PRIMARY KEY,
        numero INT,
        fk_pregrado INT,
        FOREIGN KEY (fk_pregrado) REFERENCES pregrado(pk_pregrado)
    )
    """,
    """
    CREATE TABLE IF NOT EXISTS tipo_status (
        pk_status INT AUTO_INCREMENT PRIMARY KEY,
        nombre_status VARCHAR(50)
    )
    """
]

print("🚀 Creando tablas en MySQL...")

with engine.connect() as conn:
    for sql in TABLES_SQL:
        conn.execute(text(sql))
    conn.commit()

print("✅ Todas las tablas creadas correctamente.")


print("📥 Insertando datos iniciales...")

# Estado
estado = pl.DataFrame({
    "pk_id_estado": [1, 2, 3, 4, 5],
    "nombre": ["grabado", "actualizado", "borrado", "deshacer", "no acceso"]
})

# Civil
civil = pl.DataFrame({
    "pk_id_civil": [1, 2, 3, 4, 5],
    "nombre_civil": ["casado(a)", "soltero(a)", "viudo(a)", "separado(a)", "unión libre"],
    "fk_id_estado": [2, 2, 2, 2, 2]
})

# Documento
documento = pl.DataFrame({
    "pk_id_doc": [1, 2, 3, 4, 5, 6],
    "nombre_documento": [
        "cédula de ciudadanía",
        "tarjeta de identidad",
        "pasaporte número",
        "nit",
        "cédula de extranjeria",
        "rut"
    ],
    "fk_id_estado": [2, 2, 2, 2, 2, 2]
})

# Género
genero = pl.DataFrame({
    "pk_id_gene": [1, 2],
    "nom_genero": ["masculino", "femenino"],
    "fk_id_estado": [2, 2]
})

# Módulos
modulos = pl.DataFrame({
    "pk_modulos": [1, 2, 3, 4, 5],
    "nombre": [
        "System MANAGER",
        "Administración",
        "Coordinador",
        "Docente",
        "Estudiante"
    ]
})

def insertar(df: pl.DataFrame, tabla: str):
    df.to_pandas().to_sql(
        name=tabla,
        con=engine,
        if_exists="append",
        index=False
    )
    print(f"Datos insertados en: {tabla}")

insertar(estado, "estado")
insertar(civil, "civil")
insertar(documento, "documento")
insertar(genero, "genero")
insertar(modulos, "modulos")

print("\n Base de datos 'sscd_horarios' inicializada correctamente con 18 tablas.")
