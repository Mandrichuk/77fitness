import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/backup";
import { unstable_noStore as noStore } from "next/cache";

export async function GET(request: NextRequest) {
  noStore();

  try {
    const categories = await prisma.category.findMany({
      include: {
        bgText: true,
        title: true,
      },
    });

    const data = await Promise.all(
      categories.map(async (category) => {
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
        return { category, products };
      })
    );

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
