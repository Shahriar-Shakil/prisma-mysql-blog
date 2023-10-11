import { PrismaClient } from "@prisma/client";
const { NextResponse } = require("next/server");

export async function POST(req, res) {
  try {
    const reqBody = await req.json();
    const prisma = new PrismaClient();
    console.log("working", reqBody);

    let result = await prisma.post.create({ data: reqBody });
    return NextResponse.json({ status: "success", result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ status: "Fail", result: error.toString() });
  }
}
