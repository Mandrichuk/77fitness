import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const orders = await prisma.category.findMany({
    include: {
      title: true,
      bgText: true,
    },
  });

  if (!orders || orders.length === 0) {
    return NextResponse.json({ error: "Orders not found" }, { status: 404 });
  }

  return NextResponse.json(orders, { status: 201 });
}
