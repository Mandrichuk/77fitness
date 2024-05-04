import { NextResponse, NextRequest } from "next/server";
import prisma from "@/prisma/client";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const isUnique = await prisma.client.findUnique({
    where: { email: body.email },
  });

  if (!isUnique) {
    return NextResponse.json({ error: "Email not found" }, { status: 404 });
  }

  const isCorrectLogin = await prisma.client.findUnique({
    where: { email: body.email, password: body.password },
  });

  if (!isCorrectLogin) {
    return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
  }

  return NextResponse.json(
    { isLoginValid: true, user: isCorrectLogin },
    { status: 200 }
  );
}
