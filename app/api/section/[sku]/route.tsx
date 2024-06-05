import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/backup";
import { unstable_noStore as noStore } from "next/cache";

interface Props {
  params: { sku: number };
}

export async function GET(request: NextRequest, params: Props) {
  noStore();
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
        title: true,
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
