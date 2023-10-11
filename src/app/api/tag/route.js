import { PrismaClient } from "@prisma/client";
const { NextResponse } = require("next/server");

export async function GET(req, res) {
  try {
    let prisma = new PrismaClient();
    let result = await prisma.tag.findMany();
    return NextResponse.json({ status: "success", result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ status: "Fail", result: error.toString() });
  }
}
