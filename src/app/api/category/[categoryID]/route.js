import { PrismaClient } from "@prisma/client";
const { NextResponse } = require("next/server");

export async function PATCH(request, { params }) {
  const categoryID = params.categoryID;
  try {
    const data = await request.json();
    const prisma = new PrismaClient();

    let result = await prisma.category.update({
      where: { id: Number(categoryID) },
      data: data,
    });

    return NextResponse.json({ status: "success", result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ status: "Fail", result: error.toString() });
  }
}

export async function DELETE(request, { params }) {
  const categoryID = params.categoryID;
  try {
    const prisma = new PrismaClient();

    let result = await prisma.category.delete({
      where: { id: Number(categoryID) },
    });

    return NextResponse.json({ status: "success", result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ status: "Fail", result: error.toString() });
  }
}
