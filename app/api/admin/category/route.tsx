import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/backup";

export async function GET(request: NextRequest) {
  const categories = await prisma.category.findMany({
    include: {
      bgText: true,
      title: true,
    },
  });

  return NextResponse.json({
    categories: categories,
  });
}
