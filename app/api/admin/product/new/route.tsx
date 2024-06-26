import { NextRequest, NextResponse } from "next/server";
import productSchema from "../../../products/schema";
import prisma from "@/prisma/backup";
import { unstable_noStore as noStore } from "next/cache";

export async function POST(request: NextRequest) {
  noStore();
  
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
      title: {
        create: {
          en: body.title.en,
          ru: body.title.ru,
          sk: body.title.sk,
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
