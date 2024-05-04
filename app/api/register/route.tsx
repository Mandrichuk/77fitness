import { NextRequest, NextResponse } from "next/server";
import { clientSchema, orderSchema, orderProductSchema } from "./shema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const clients = await prisma.client.findMany();

  return NextResponse.json(clients);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = clientSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );
  }

  const isUnique = await prisma.client.findUnique({
    where: { sku: body.sku, email: body.email },
  });

  if (isUnique) {
    return NextResponse.json(
      { error: "Product already exists" },
      { status: 400 }
    );
  }
  
  const client = await prisma.client.create({
    data: {
      sku: body.sku,
      username: body.username,
      email: body.email,
      password: body.password,
    },
  });

  return NextResponse.json(client, { status: 201 });
}
