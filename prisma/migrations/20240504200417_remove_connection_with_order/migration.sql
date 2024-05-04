/*
  Warnings:

  - Added the required column `isDone` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_clientId_fkey`;

-- AlterTable
ALTER TABLE `order` ADD COLUMN `isDone` BOOLEAN NOT NULL,
    MODIFY `completedDate` DATETIME(3) NULL;
