import { NextResponse, NextRequest } from "next/server";
import prisma from "@/prisma/backup";
import { unstable_noStore as noStore } from "next/cache";

export async function POST(request: NextRequest) {
  noStore();
  
  const body = await request.json();

  const isAdminExist = await prisma.admin.findFirst({
    where: { username: body.username },
  });

  if (!isAdminExist) {
    return NextResponse.json({ error: "username not found" }, { status: 404 });
  }

  const isCorrectLogin = await prisma.admin.findFirst({
    where: { username: body.username, password: body.password },
  });

  if (!isCorrectLogin) {
    return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
  }

  return NextResponse.json(
    { isLoginValid: true, admin: isCorrectLogin },
    { status: 200 }
  );
}
