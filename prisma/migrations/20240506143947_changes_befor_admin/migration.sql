-- AddForeignKey
ALTER TABLE `OrderProduct` ADD CONSTRAINT `OrderProduct_productSku_fkey` FOREIGN KEY (`productSku`) REFERENCES `Product`(`sku`) ON DELETE RESTRICT ON UPDATE CASCADE;
