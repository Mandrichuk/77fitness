/*
  Warnings:

  - A unique constraint covering the columns `[orderId,productSku]` on the table `OrderProduct` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `OrderProduct_orderId_productSku_key` ON `OrderProduct`(`orderId`, `productSku`);
