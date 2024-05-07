/*
  Warnings:

  - You are about to drop the column `clientId` on the `order` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Order_clientId_fkey` ON `order`;

-- AlterTable
ALTER TABLE `order` DROP COLUMN `clientId`;
