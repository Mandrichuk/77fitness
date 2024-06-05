import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/backup";
import { unstable_noStore as noStore } from "next/cache";

export async function GET(request: NextRequest) {
  noStore();

  const products = await prisma.product.findMany({
    include: {
      images: true,
      title: true,
      description: true,
    },
  });

  if (!products || products.length === 0) {
    return NextResponse.json({ error: "Products not found" }, { status: 404 });
  }

  return NextResponse.json({ products: products }, { status: 201 });
}
