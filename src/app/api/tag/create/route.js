import { PrismaClient } from "@prisma/client";
const { NextResponse } = require("next/server");

export async function POST(req, res) {
  try {
    const reqBody = await req.json();
    const prisma = new PrismaClient();

    let result = await prisma.tag.create({ data: reqBody });
    return NextResponse.json({ status: "success", result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ status: "Fail", result: error.toString() });
  }
}
