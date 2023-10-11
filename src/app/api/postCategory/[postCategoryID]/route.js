import { PrismaClient } from "@prisma/client";
const { NextResponse } = require("next/server");

export async function PATCH(request, { params }) {
  const postCategoryID = params.postCategoryID;
  try {
    const data = await request.json();
    const prisma = new PrismaClient();
    let result = await prisma.postCategory.update({
      where: { id: Number(postCategoryID) },
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
  const postCategoryID = params.postCategoryID;
  try {
    const prisma = new PrismaClient();

    let result = await prisma.postCategory.delete({
      where: { id: Number(postCategoryID) },
    });

    return NextResponse.json({ status: "success", result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ status: "Fail", result: error.toString() });
  }
}
