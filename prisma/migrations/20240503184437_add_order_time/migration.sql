/*
  Warnings:

  - You are about to drop the column `completedDate` on the `orderproducts` table. All the data in the column will be lost.
  - You are about to drop the column `orderedDate` on the `orderproducts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `order` ADD COLUMN `completedDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `orderedDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `orderproducts` DROP COLUMN `completedDate`,
    DROP COLUMN `orderedDate`;
