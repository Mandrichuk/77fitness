import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import OrderSchema from "./schema";
import getId from "@/app/utils/getId";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = OrderSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );
  }

  const isUnique = await prisma.order.findUnique({
    where: { sku: body.sku },
  });

  if (isUnique) {
    return NextResponse.json(
      { error: "Order already exists" },
      { status: 400 }
    );
  }

  const order = await prisma.order.create({
    data: {
      sku: body.sku,
      clientSku: body.clientSku,
      products: {
        createMany: {
          data: body.products.map((product: any) => ({
            productSku: product.productSku,
            quantity: product.quantity,
          })),
        },
      },
      isDone: body.isDone,
    },
    include: {
      products: true,
    },
  });

  return NextResponse.json(order, { status: 201 });
}
