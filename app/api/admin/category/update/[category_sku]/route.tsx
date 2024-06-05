import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/backup";
import categorySchema from "@/app/api/category/schema";
import { unstable_noStore as noStore } from "next/cache";

interface Props {
  params: { category_sku: number };
}

export async function GET(request: NextRequest, params: Props) {
  noStore();

  
  const requestedSku = params.params.category_sku.toString();

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
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(category);
}

export async function PUT(request: NextRequest, params: Props) {
  const requestedSku = params.params.category_sku.toString();
  const body = await request.json();
  const validation = categorySchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );
  }

  const category = await prisma.category.findUnique({
    where: {
      sku: requestedSku,
    },
  });

  if (!category) {
    return NextResponse.json(
      { error: "Category by SKU not found" },
      { status: 404 }
    );
  }

  const updatedCategory = await prisma.category.update({
    where: {
      sku: requestedSku,
    },
    data: {
      sku: body.sku,
      name: body.name,
      bgText: {
        update: {
          en: body.bgText.en,
          ru: body.bgText.ru,
          sk: body.bgText.sk,
        },
      },
      title: {
        update: {
          en: body.title.en,
          ru: body.title.ru,
          sk: body.title.sk,
        },
      },
      recomended: body.recomended,
      toDisplay: body.toDisplay,
    },
  });

  return NextResponse.json(updatedCategory);
}
