-- AlterTable
ALTER TABLE `order` MODIFY `isDone` BOOLEAN NOT NULL DEFAULT false;

-- RenameIndex
ALTER TABLE `orderproduct` RENAME INDEX `OrderProduct_orderId_fkey` TO `orderId`;
