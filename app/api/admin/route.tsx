import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import productSchema from "@/app/api/products/schema";

interface Props {
  params: { product_sku: number };
}

export async function GET(request: NextRequest) {
  const orders = await prisma.order.findMany({
    include: {
      products: true,
    },
  });

  if (!orders || orders.length === 0) {
    return NextResponse.json([], { status: 202 });
  }

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

  return NextResponse.json(orders, { status: 201 });
}
