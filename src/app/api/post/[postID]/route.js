import { PrismaClient } from "@prisma/client";
const { NextResponse } = require("next/server");

export async function GET(req, { params }) {
  const postID = params.postID;
  try {
    const startTime = Date.now();
    const prisma = new PrismaClient();
    const post = await prisma.post.findUnique({
      where: { id: Number(postID) },
      include: {
        author: true,
        postCategory: true,
        tags: true,
        postComments: true,
        postmeta: true,
        _count: true,
      },
    });
    const executionTime = Date.now() - startTime;
    return NextResponse.json(
      { status: "success", data: post, executionTime },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { status: "Fail", result: error.toString() },
      { status: 500 }
    );
  }
}
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
