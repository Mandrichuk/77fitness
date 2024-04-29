-- CreateTable
CREATE TABLE `Product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sku` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `categoryId` INTEGER NOT NULL,
    `description` JSON NOT NULL,
    `imageUrls` JSON NOT NULL,
    `newPrice` DOUBLE NOT NULL,
    `oldPrice` DOUBLE NOT NULL,
    `createdAt` VARCHAR(191) NOT NULL,
    `toDisplay` BOOLEAN NOT NULL DEFAULT true,
    `leftInStock` INTEGER NOT NULL,

    UNIQUE INDEX `Product_sku_key`(`sku`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
