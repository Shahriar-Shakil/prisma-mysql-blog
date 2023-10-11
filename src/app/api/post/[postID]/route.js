import { PrismaClient } from "@prisma/client";
const { NextResponse } = require("next/server");

export async function PATCH(request, { params }) {
  const postID = params.postID;
  try {
    const data = await request.json();
    const prisma = new PrismaClient();

    let result = await prisma.post.update({
      where: { id: Number(postID) },
      data: data,
    });

    return NextResponse.json({ status: "success", result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ status: "Fail", result: error.toString() });
  }
}

export async function DELETE(request, { params }) {
  const postID = params.postID;
  console.log(postID);
  try {
    const prisma = new PrismaClient();

    let result = await prisma.post.delete({
      where: { id: Number(postID) },
    });

    return NextResponse.json({ status: "success", result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ status: "Fail", result: error.toString() });
  }
}
