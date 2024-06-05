import { unstable_noStore as noStore } from "next/cache";
import prisma from "../../prisma/client";

/* Orders */

export async function getOrders() {
  noStore();

  try {
    const orders = await prisma.order.findMany({
      include: {
        products: true,
      },
    });

    const enrichedOrders = await Promise.all(
      orders.map(async (order) => {
        const clientEmail = await prisma.client.findUnique({
          where: { sku: order.clientSku },
          select: { email: true },
        });

        const products = await Promise.all(
          order.products.map(async (product) => {
            const productData = await prisma.product.findUnique({
              where: { sku: product.productSku },
              include: { description: true, images: true },
            });

            return productData
              ? { ...product, ...productData, quantity: product.quantity }
              : product;
          })
        );

        return {
          ...order,
          clientEmail: clientEmail?.email || null,
          products,
        };
      })
    );

    return enrichedOrders;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
