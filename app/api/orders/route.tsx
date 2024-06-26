import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/backup";
import { unstable_noStore as noStore } from "next/cache";

export async function POST(request: NextRequest) {
  noStore();

  const body = await request.json();

  const orders = await prisma.order.findMany({
    where: { clientSku: body.sku },
    include: {
      products: true,
    },
  });

  if (!orders || orders.length === 0) {
    return NextResponse.json([], { status: 201 });
  }

  for (const order of orders) {
    for (const product of order.products) {
      const productData = await prisma.product.findUnique({
        where: { sku: product.productSku },
        include: { title: true, description: true, images: true },
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
