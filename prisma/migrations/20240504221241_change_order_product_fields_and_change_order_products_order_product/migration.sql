/*
  Warnings:

  - You are about to drop the `orderproducts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `orderproducts` DROP FOREIGN KEY `OrderProducts_orderId_fkey`;

-- DropForeignKey
ALTER TABLE `orderproducts` DROP FOREIGN KEY `OrderProducts_productId_fkey`;

-- DropTable
DROP TABLE `orderproducts`;

-- CreateTable
CREATE TABLE `OrderProduct` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `orderId` INTEGER NOT NULL,
    `productSku` VARCHAR(191) NOT NULL,
    `quantity` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `OrderProduct` ADD CONSTRAINT `OrderProduct_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
