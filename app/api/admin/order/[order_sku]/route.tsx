import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/backup";
import OrderSchema from "@/app/api/order/schema";
import { unstable_noStore as noStore } from "next/cache";

interface Props {
  params: { order_sku: number };
}

export async function PUT(request: NextRequest, params: Props) {
  noStore();
  
  const requestedSku = params.params.order_sku.toString();

  const body = await request.json();
  const validation = OrderSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );
  }

  const order = await prisma.order.findUnique({
    where: {
      sku: requestedSku,
    },
  });

  if (!order) {
    return NextResponse.json(
      { error: "Category by SKU not found" },
      { status: 404 }
    );
  }

  const updatedOrder = await prisma.order.update({
    where: { sku: requestedSku },
    data: {
      isDone: body.isDone,
    },
    select: {
      sku: true,
      clientSku: true,
      products: true,
      isDone: true,
    }
  });

  return NextResponse.json(updatedOrder);
}
