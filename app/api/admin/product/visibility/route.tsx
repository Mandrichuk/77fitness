import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/backup";
import { unstable_noStore as noStore } from "next/cache";

export async function POST(request: NextRequest) {
  noStore();
  
  const body = await request.json();

  const product = await prisma.product.findUnique({
    where: {
      sku: body.sku,
    },
  });

  if (!product) {
    return NextResponse.json(
      { error: "Product by SKU not found" },
      { status: 404 }
    );
  }

  const updatedProduct = await prisma.product.update({
    where: {
      sku: body.sku,
    },
    data: {
      toDisplay: body.updatedToDisplay,
    },
  });

  return NextResponse.json(
    { updatedProduct: updatedProduct },
    { status: 201 }
  );
}
