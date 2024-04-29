/*
  Warnings:

  - You are about to drop the `category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `categorydescription` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `productdescription` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `category` DROP FOREIGN KEY `Category_categoryDescriptionId_fkey`;

-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `Product_descriptionId_fkey`;

-- DropTable
DROP TABLE `category`;

-- DropTable
DROP TABLE `categorydescription`;

-- DropTable
DROP TABLE `productdescription`;

-- CreateTable
CREATE TABLE `Description` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `en` VARCHAR(191) NOT NULL,
    `ru` VARCHAR(191) NOT NULL,
    `sk` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_descriptionId_fkey` FOREIGN KEY (`descriptionId`) REFERENCES `Description`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
