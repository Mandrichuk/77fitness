import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/backup";
import { unstable_noStore as noStore } from "next/cache";

export async function POST(request: NextRequest) {
  noStore();
  
  const body = await request.json();
  const cartProducts = [];
  let totalPrice = 0;

  for (const product of body) {
    const productData = await prisma.product.findUnique({
      where: {
        sku: product.sku,
      },
      include: {
        title: true,
        description: true,
        images: true,
      },
    });

    if (productData) {
      totalPrice += productData.newPrice * product.quantity;
      cartProducts.push({
        ...product,
        product: productData,
      });
    }
  }

  return NextResponse.json({
    cartProducts: cartProducts,
    totalPrice: totalPrice.toFixed(2),
  });
}
