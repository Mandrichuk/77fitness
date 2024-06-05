import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/backup";
import { unstable_noStore as noStore } from "next/cache";

export async function GET(request: NextRequest) {
  noStore();

  const emails = await prisma.email.findMany();

  return NextResponse.json(emails);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const isUnique = await prisma.email.findUnique({
    where: { email: body.email },
  });

  if (isUnique) {
    return NextResponse.json(
      { error: "Email already exists" },
      { status: 400 }
    );
  }

  const email = await prisma.email.create({
    data: {
      email: body.email,
    },
  });

  return NextResponse.json(email, { status: 201 });
}
