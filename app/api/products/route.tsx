import { NextRequest, NextResponse } from "next/server";
import productSchema from "./schema";
import prisma from "@/prisma/backup";
import toFixedNumber from "@/app/utils/toFixedNumber";
import { unstable_noStore as noStore } from "next/cache";

export async function GET(request: NextRequest) {
  noStore();
  
  const products = await prisma.product.findMany({
    where: {
      toDisplay: true,
    },
    include: {
      title: true,
      description: true,
      images: true,
    },
  });

  const titles = await prisma.productTitle.findMany();
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
      newPrice: Number(toFixedNumber(body.newPrice)),
      oldPrice: Number(toFixedNumber(body.oldPrice)),
      leftInStock: body.leftInStock,
    },
  });
  return NextResponse.json(product, { status: 201 });
}

export async function DELETE(request: NextRequest) {
  try {
    // Attempt to delete all products
    await prisma.product.deleteMany();

    // Return success response
    return NextResponse.json(
      { message: "All products deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Failed to delete products:", error);

    // Return error response
    return NextResponse.json(
      { error: "Failed to delete products. See server logs for details." },
      { status: 500 }
    );
  }
}
