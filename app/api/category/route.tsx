import { NextRequest, NextResponse } from "next/server";
import categorySchema from "./schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const categories = await prisma.category.findMany({
    where: {
      toDisplay: true,
    },
  });

  return NextResponse.json({
    categories: categories,
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = categorySchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );
  }

  const isUnique = await prisma.category.findUnique({
    where: { sku: body.sku },
  });

  if (isUnique) {
    return NextResponse.json(
      { error: "Category already exists" },
      { status: 400 }
    );
  }

  const category = await prisma.category.create({
    data: {
      sku: body.sku,
      name: body.name,
      description: {
        create: {
          en: body.description.en,
          ru: body.description.ru,
          sk: body.description.sk,
        },
      },
      recomended: body.recomended,
      toDisplay: body.toDisplay,
    },
  });
  return NextResponse.json(category, { status: 201 });
}
