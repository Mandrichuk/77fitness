import { PrismaClient } from "@prisma/client";
// import { hash } from 'bcryptjs';
import {
  productTitleData,
  productDescriptionData,
  productData,
  productImagesData,
} from "./preset_data/product";
import {
  categoryBgTextData,
  categoryTitleData,
  categoryData,
} from "./preset_data/category";
import { orderData, orderProducts } from "./preset_data/order";
import clientData from "./preset_data/client";
import adminData from "./preset_data/admin";

const prisma = new PrismaClient();

async function main() {
  // await prisma.email.createMany({
  //   data: [],
  // });

  // await prisma.productTitle.createMany({ data: productTitleData });
  // await prisma.productDescription.createMany({ data: productDescriptionData });
  // await prisma.product.createMany({ data: productData });
  // await prisma.productImage.createMany({ data: productImagesData });

  // await prisma.categoryBgText.createMany({ data: categoryBgTextData });
  // await prisma.categoryTitle.createMany({ data: categoryTitleData });
  // await prisma.category.createMany({ data: categoryData });

  await prisma.orderProduct.createMany({ data: orderProducts });
  // await prisma.order.createMany({ data: orderData });

  // await prisma.client.createMany({ data: clientData });

  // await prisma.admin.createMany({
  //   data: adminData,
  // });

  console.log("Data has been successfully inserted.");
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
