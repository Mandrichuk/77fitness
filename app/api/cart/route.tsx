import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const cartProducts = [];

  for (const product of body) {
    const productData = await prisma.product.findUnique({
      where: {
        sku: product.sku,
      },
      include: {
        description: true,
        images: true,
      }
    });
    cartProducts.push({
      ...product,
      product: productData,
    });
  }

  return NextResponse.json({
    cartProducts: cartProducts,
  });
}
