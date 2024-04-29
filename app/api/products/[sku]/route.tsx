import { NextRequest, NextResponse } from "next/server";
import productSchema from "../schema";
import prisma from "@/prisma/client";

interface Props {
  params: { sku: number };
}

export async function GET(request: NextRequest, params: Props) {
  const requestedSku = params.params.sku.toString();

  const product = await prisma.product.findUnique({
    where: {
      sku: requestedSku,
    },
  });

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}

export async function PUT(request: NextRequest, params: Props) {
  const requestedSku = params.params.sku.toString();

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
      { error: "Product by SKU not found" },
      { status: 404 }
    );
  }

  const updatedProduct = await prisma.product.update({
    where: {
      sku: requestedSku,
    },
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
      leftInStock: body.leftInStock,
    },
  });

  return NextResponse.json(updatedProduct);
}
