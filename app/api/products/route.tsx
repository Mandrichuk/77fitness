import { NextRequest, NextResponse } from "next/server";
import productSchema from "./schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const products = await prisma.product.findMany({
    where: {
      toDisplay: true,
    },
  });

  const descriptions = await prisma.productDescription.findMany();
  const images = await prisma.productImage.findMany();

  return NextResponse.json({
    products: products,
    descriptions: descriptions,
    images: images,
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = productSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );
  }

  const isUnique = await prisma.product.findUnique({
    where: { sku: body.sku },
  });

  if (isUnique) {
    return NextResponse.json(
      { error: "Product already exists" },
      { status: 400 }
    );
  }

  const product = await prisma.product.create({
    data: {
      sku: body.sku,
      name: body.name,
      categoryId: body.categoryId,
      description: {
        create: {
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
  return NextResponse.json(product, { status: 201 });
}
