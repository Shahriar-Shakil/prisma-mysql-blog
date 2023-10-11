import { PrismaClient } from "@prisma/client";
const { NextResponse } = require("next/server");

export async function PATCH(request, { params }) {
  const userID = params.userID;
  try {
    const data = await request.json();
    const prisma = new PrismaClient();

    let result = await prisma.user.update({
      where: { id: Number(userID) },
      data: data,
    });

    return NextResponse.json({ status: "success", result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ status: "Fail", result: error.toString() });
  }
}

export async function DELETE(request, { params }) {
  const userID = params.userID;
  try {
    const prisma = new PrismaClient();

    let result = await prisma.user.delete({
      where: { id: Number(userID) },
    });

    return NextResponse.json({ status: "success", result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ status: "Fail", result: error.toString() });
  }
}
