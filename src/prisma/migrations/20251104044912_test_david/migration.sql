-- CreateTable
CREATE TABLE `acceso` (
    `pk_acceso` INTEGER NOT NULL AUTO_INCREMENT,
    `usuario` VARCHAR(50) NULL,
    `contrasena` VARCHAR(100) NULL,
    `fk_modulo` INTEGER NULL,

    INDEX `fk_modulo`(`fk_modulo`),
    PRIMARY KEY (`pk_acceso`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `asignaturas` (
    `pk_asignatura` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre_asignatura` VARCHAR(100) NULL,
    `codigo` VARCHAR(20) NULL,

    PRIMARY KEY (`pk_asignatura`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `aulas` (
    `pk_aula` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre_aula` VARCHAR(50) NULL,
    `capacidad` INTEGER NULL,

    PRIMARY KEY (`pk_aula`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cargo` (
    `pk_cargo` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre_cargo` VARCHAR(50) NULL,

    PRIMARY KEY (`pk_cargo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cia` (
    `pk_cia` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre_cia` VARCHAR(100) NULL,
    `direccion` VARCHAR(150) NULL,
    `telefono` VARCHAR(20) NULL,

    PRIMARY KEY (`pk_cia`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `civil` (
    `pk_id_civil` INTEGER NOT NULL,
    `nombre_civil` VARCHAR(50) NULL,
    `fk_id_estado` INTEGER NULL,

    INDEX `fk_id_estado`(`fk_id_estado`),
    PRIMARY KEY (`pk_id_civil`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `datos` (
    `pk_dato` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(50) NULL,
    `apellido` VARCHAR(50) NULL,
    `fk_id_doc` INTEGER NULL,
    `fk_id_civil` INTEGER NULL,
    `fk_id_gene` INTEGER NULL,

    INDEX `fk_id_civil`(`fk_id_civil`),
    INDEX `fk_id_doc`(`fk_id_doc`),
    INDEX `fk_id_gene`(`fk_id_gene`),
    PRIMARY KEY (`pk_dato`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `documento` (
    `pk_id_doc` INTEGER NOT NULL,
    `nombre_documento` VARCHAR(100) NULL,
    `fk_id_estado` INTEGER NULL,

    INDEX `fk_id_estado`(`fk_id_estado`),
    PRIMARY KEY (`pk_id_doc`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `estado` (
    `pk_id_estado` INTEGER NOT NULL,
    `nombre` VARCHAR(50) NULL,

    PRIMARY KEY (`pk_id_estado`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `genero` (
    `pk_id_gene` INTEGER NOT NULL,
    `nom_genero` VARCHAR(50) NULL,
    `fk_id_estado` INTEGER NULL,

    INDEX `fk_id_estado`(`fk_id_estado`),
    PRIMARY KEY (`pk_id_gene`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `horarios` (
    `pk_horario` INTEGER NOT NULL AUTO_INCREMENT,
    `dia` VARCHAR(20) NULL,
    `hora_inicio` TIME(0) NULL,
    `hora_fin` TIME(0) NULL,

    PRIMARY KEY (`pk_horario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `laboratorio` (
    `pk_lab` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre_lab` VARCHAR(100) NULL,
    `capacidad` INTEGER NULL,

    PRIMARY KEY (`pk_lab`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `modulos` (
    `pk_modulos` INTEGER NOT NULL,
    `nombre` VARCHAR(100) NULL,

    PRIMARY KEY (`pk_modulos`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mov_asig_au` (
    `pk_mov` INTEGER NOT NULL AUTO_INCREMENT,
    `fk_asignatura` INTEGER NULL,
    `fk_aula` INTEGER NULL,
    `fk_horario` INTEGER NULL,

    INDEX `fk_asignatura`(`fk_asignatura`),
    INDEX `fk_aula`(`fk_aula`),
    INDEX `fk_horario`(`fk_horario`),
    PRIMARY KEY (`pk_mov`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pregrado` (
    `pk_pregrado` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre_pregrado` VARCHAR(100) NULL,

    PRIMARY KEY (`pk_pregrado`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `preofe_mate` (
    `pk_preofe` INTEGER NOT NULL AUTO_INCREMENT,
    `fk_pregrado` INTEGER NULL,
    `fk_asignatura` INTEGER NULL,

    INDEX `fk_asignatura`(`fk_asignatura`),
    INDEX `fk_pregrado`(`fk_pregrado`),
    PRIMARY KEY (`pk_preofe`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `semestre` (
    `pk_semestre` INTEGER NOT NULL AUTO_INCREMENT,
    `numero` INTEGER NULL,
    `fk_pregrado` INTEGER NULL,

    INDEX `fk_pregrado`(`fk_pregrado`),
    PRIMARY KEY (`pk_semestre`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tipo_status` (
    `pk_status` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre_status` VARCHAR(50) NULL,

    PRIMARY KEY (`pk_status`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `acceso` ADD CONSTRAINT `acceso_ibfk_1` FOREIGN KEY (`fk_modulo`) REFERENCES `modulos`(`pk_modulos`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `civil` ADD CONSTRAINT `civil_ibfk_1` FOREIGN KEY (`fk_id_estado`) REFERENCES `estado`(`pk_id_estado`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `datos` ADD CONSTRAINT `datos_ibfk_1` FOREIGN KEY (`fk_id_doc`) REFERENCES `documento`(`pk_id_doc`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `datos` ADD CONSTRAINT `datos_ibfk_2` FOREIGN KEY (`fk_id_civil`) REFERENCES `civil`(`pk_id_civil`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `datos` ADD CONSTRAINT `datos_ibfk_3` FOREIGN KEY (`fk_id_gene`) REFERENCES `genero`(`pk_id_gene`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `documento` ADD CONSTRAINT `documento_ibfk_1` FOREIGN KEY (`fk_id_estado`) REFERENCES `estado`(`pk_id_estado`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `genero` ADD CONSTRAINT `genero_ibfk_1` FOREIGN KEY (`fk_id_estado`) REFERENCES `estado`(`pk_id_estado`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `mov_asig_au` ADD CONSTRAINT `mov_asig_au_ibfk_1` FOREIGN KEY (`fk_asignatura`) REFERENCES `asignaturas`(`pk_asignatura`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `mov_asig_au` ADD CONSTRAINT `mov_asig_au_ibfk_2` FOREIGN KEY (`fk_aula`) REFERENCES `aulas`(`pk_aula`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `mov_asig_au` ADD CONSTRAINT `mov_asig_au_ibfk_3` FOREIGN KEY (`fk_horario`) REFERENCES `horarios`(`pk_horario`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `preofe_mate` ADD CONSTRAINT `preofe_mate_ibfk_1` FOREIGN KEY (`fk_pregrado`) REFERENCES `pregrado`(`pk_pregrado`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `preofe_mate` ADD CONSTRAINT `preofe_mate_ibfk_2` FOREIGN KEY (`fk_asignatura`) REFERENCES `asignaturas`(`pk_asignatura`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `semestre` ADD CONSTRAINT `semestre_ibfk_1` FOREIGN KEY (`fk_pregrado`) REFERENCES `pregrado`(`pk_pregrado`) ON DELETE RESTRICT ON UPDATE RESTRICT;
