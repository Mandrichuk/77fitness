/*
  Warnings:

  - Added the required column `titleId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product` ADD COLUMN `titleId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `ProductTitle` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `en` VARCHAR(191) NOT NULL,
    `ru` VARCHAR(191) NOT NULL,
    `sk` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_titleId_fkey` FOREIGN KEY (`titleId`) REFERENCES `ProductTitle`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
