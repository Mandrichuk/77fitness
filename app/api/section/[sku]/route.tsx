import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

interface Props {
  params: { sku: number };
}

export async function GET(request: NextRequest, params: Props) {
  try {
    const requestedSku = params.params.sku.toString();

    const category = await prisma.category.findUnique({
      where: {
        sku: requestedSku,
      },
      include: {
        bgText: true,
        title: true,
      },
    });

    if (!category) {
      return NextResponse.json(
        { error: `${requestedSku} Category not found` },
        { status: 404 }
      );
    }

    const products = await prisma.product.findMany({
      where: {
        categoryId: category.id,
      },
      include: {
        description: true,
        images: true,
      },
    });

    const categoryWithProducts = [{ category, products }];

    return NextResponse.json(categoryWithProducts);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
