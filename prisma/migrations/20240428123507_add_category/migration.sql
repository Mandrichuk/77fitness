-- CreateTable
CREATE TABLE `Category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sku` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `recomended` BOOLEAN NOT NULL,
    `categoryDescriptionId` INTEGER NOT NULL,

    UNIQUE INDEX `Category_sku_key`(`sku`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CategoryDescription` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `en` VARCHAR(191) NOT NULL,
    `ru` VARCHAR(191) NOT NULL,
    `sk` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Category` ADD CONSTRAINT `Category_categoryDescriptionId_fkey` FOREIGN KEY (`categoryDescriptionId`) REFERENCES `CategoryDescription`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
