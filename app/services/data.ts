
import { unstable_noStore as noStore } from 'next/cache';
import prisma from '../../prisma/client'


/* Orders */

export async function getOrders() {
  noStore();

  try {
   const orders = await prisma.order.findMany({
    include: {
      products:true
    },
  });

  

  for (const order of orders) {
    for (const product of order.products) {
      const productData = await prisma.product.findUnique({
        where: { sku: product.productSku },
        include: { description: true, images: true },
      });

      if (productData) {
        Object.assign(product, {
          ...productData,
          quantity: product.quantity,
        });
      }
    }
  }

  return orders
  } catch (error) {
    console.error(error);
    throw error;
  }
}