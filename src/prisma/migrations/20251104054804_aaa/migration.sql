-- AlterTable
ALTER TABLE `datos` ADD COLUMN `asignatura` VARCHAR(100) NULL,
    ADD COLUMN `correo` VARCHAR(100) NULL,
    ADD COLUMN `dia` VARCHAR(20) NULL,
    ADD COLUMN `fk_id_semestre` INTEGER NULL,
    ADD COLUMN `fk_id_tipo_status` INTEGER NULL,
    ADD COLUMN `fk_pregrado` INTEGER NULL,
    ADD COLUMN `hora_fin` VARCHAR(10) NULL,
    ADD COLUMN `hora_inicio` VARCHAR(10) NULL,
    ADD COLUMN `salon` VARCHAR(50) NULL,
    ADD COLUMN `telefono` VARCHAR(20) NULL;

-- CreateIndex
CREATE INDEX `fk_pregrado` ON `datos`(`fk_pregrado`);

-- CreateIndex
CREATE INDEX `fk_id_semestre` ON `datos`(`fk_id_semestre`);

-- CreateIndex
CREATE INDEX `fk_id_tipo_status` ON `datos`(`fk_id_tipo_status`);

-- AddForeignKey
ALTER TABLE `datos` ADD CONSTRAINT `datos_ibfk_4` FOREIGN KEY (`fk_pregrado`) REFERENCES `pregrado`(`pk_pregrado`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `datos` ADD CONSTRAINT `datos_ibfk_5` FOREIGN KEY (`fk_id_semestre`) REFERENCES `semestre`(`pk_semestre`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `datos` ADD CONSTRAINT `datos_ibfk_6` FOREIGN KEY (`fk_id_tipo_status`) REFERENCES `tipo_status`(`pk_status`) ON DELETE RESTRICT ON UPDATE RESTRICT;
