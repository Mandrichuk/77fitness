import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/backup";
import productSchema from "@/app/api/products/schema";

export async function GET(request: NextRequest) {
  const orders = await prisma.order.findMany({
    include: {
      products: true,
    },
  });

  if (!orders || orders.length === 0) {
    return NextResponse.json([], { status: 202 });
  }

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

  return NextResponse.json(enrichedOrders, { status: 201 });
}
