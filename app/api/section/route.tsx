import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  try {
    const data = await Promise.all(
      (
        await prisma.categoryDescription.findMany()
      ).map(async (description) => {
        const products = await prisma.product.findMany({
          where: {
            categoryId: description.id,
          },
          include: {
            description: true,
            images: true,
          },
        });
        return { description, products };
      })
    );

    return NextResponse.json({ data });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
