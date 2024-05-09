import { NextRequest, NextResponse } from "next/server";
import productSchema from "../../../category/schema";
import prisma from "@/prisma/client";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const category = await prisma.category.findUnique({
    where: {
      sku: body.sku,
    },
  });

  if (!category) {
    return NextResponse.json(
      { error: "Product by SKU not found" },
      { status: 404 }
    );
  }

  const updatedCategory = await prisma.category.update({
    where: {
      sku: body.sku,
    },
    data: {
      toDisplay: body.updatedToDisplay,
    },
  });

  return NextResponse.json(
    { updatedCategory: updatedCategory },
    { status: 201 }
  );
}