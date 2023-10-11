import { PrismaClient } from "@prisma/client";
const { NextResponse } = require("next/server");

export async function PATCH(request, { params }) {
  const postTagID = params.postTagID;
  try {
    const data = await request.json();
    const prisma = new PrismaClient();
    let result = await prisma.postTag.update({
      where: { id: Number(postTagID) },
      data: data,
    });
    return NextResponse.json({ status: "success", result }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { status: "Fail", result: error.toString() },
      { status: 401 }
    );
  }
}

export async function DELETE(request, { params }) {
  const postTagID = params.postTagID;
  try {
    const prisma = new PrismaClient();

    let result = await prisma.postTag.delete({
      where: { id: Number(postTagID) },
    });

    return NextResponse.json({ status: "success", result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ status: "Fail", result: error.toString() });
  }
}
