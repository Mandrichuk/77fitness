import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/backup";
import { unstable_noStore as noStore } from "next/cache";

export async function GET(request: NextRequest) {
  noStore();
  
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
