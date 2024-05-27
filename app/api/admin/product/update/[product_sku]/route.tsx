import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/backup";
import productSchema from "@/app/api/products/schema";

interface Props {
  params: { product_sku: number };
}

export async function GET(request: NextRequest, params: Props) {
  const requestedSku = params.params.product_sku.toString();

  const product = await prisma.product.findUnique({
    where: {
      sku: requestedSku,
    },
    include: {
      images: true,
      description: true,
    },
  });

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}

export async function PUT(request: NextRequest, params: Props) {
  const requestedSku = params.params.product_sku.toString();

  const body = await request.json();
  const validation = productSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );
  }

  const product = await prisma.product.findUnique({
    where: {
      sku: requestedSku,
    },
  });

  if (!product) {
    return NextResponse.json(
      { error: "Category by SKU not found" },
      { status: 404 }
    );
  }

  const updatedProduct = await prisma.product.update({
    where: { sku: requestedSku },
    data: {
      sku: body.sku,
      name: body.name,
      categoryId: body.categoryId,
      description: {
        update: {
          en: body.description.en,
          ru: body.description.ru,
          sk: body.description.sk,
        },
      },
      images: {
        create: body.imageUrls.map((url: string) => ({ url })),
      },
      newPrice: body.newPrice,
      oldPrice: body.oldPrice,
      toDisplay: body.toDisplay,
      leftInStock: body.leftInStock,
    },
  });

  return NextResponse.json(validation);
}
