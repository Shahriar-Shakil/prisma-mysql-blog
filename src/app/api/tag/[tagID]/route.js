import { PrismaClient } from "@prisma/client";
const { NextResponse } = require("next/server");

export async function PATCH(request, { params }) {
  const tagID = params.tagID;
  try {
    const data = await request.json();
    const prisma = new PrismaClient();

    let result = await prisma.tag.update({
      where: { id: Number(tagID) },
      data: data,
    });

    return NextResponse.json({ status: "success", result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ status: "Fail", result: error.toString() });
  }
}

export async function DELETE(request, { params }) {
  const tagID = params.tagID;
  try {
    const prisma = new PrismaClient();

    let result = await prisma.tag.delete({
      where: { id: Number(tagID) },
    });

    return NextResponse.json({ status: "success", result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ status: "Fail", result: error.toString() });
  }
}
