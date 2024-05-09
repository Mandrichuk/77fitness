import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const products = await prisma.product.findMany({
    include: {
      images: true,
      description: true,
    },
  });

  if (!products || products.length === 0) {
    return NextResponse.json({ error: "Products not found" }, { status: 404 });
  }

  return NextResponse.json({ products: products }, { status: 201 });
}
