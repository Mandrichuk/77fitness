/*
  Warnings:

  - You are about to drop the column `categoryDescriptionId` on the `category` table. All the data in the column will be lost.
  - You are about to drop the `categorydescription` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `categoryBgTextId` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryTitleId` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `category` DROP FOREIGN KEY `Category_categoryDescriptionId_fkey`;

-- AlterTable
ALTER TABLE `category` DROP COLUMN `categoryDescriptionId`,
    ADD COLUMN `categoryBgTextId` INTEGER NOT NULL,
    ADD COLUMN `categoryTitleId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `categorydescription`;

-- CreateTable
CREATE TABLE `CategoryBgText` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `en` VARCHAR(191) NOT NULL,
    `ru` VARCHAR(191) NOT NULL,
    `sk` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CategoryTitle` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `en` VARCHAR(191) NOT NULL,
    `ru` VARCHAR(191) NOT NULL,
    `sk` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Category` ADD CONSTRAINT `Category_categoryBgTextId_fkey` FOREIGN KEY (`categoryBgTextId`) REFERENCES `CategoryBgText`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Category` ADD CONSTRAINT `Category_categoryTitleId_fkey` FOREIGN KEY (`categoryTitleId`) REFERENCES `CategoryTitle`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
