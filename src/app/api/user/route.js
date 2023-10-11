import { PrismaClient } from "@prisma/client";
const { NextResponse } = require("next/server");

export async function GET(req, res) {
  const pageNumber = 1;
  const pageSize = 5;
  const skip = (pageNumber - 1) * pageSize;

  try {
    let prisma = new PrismaClient();
    const total = await prisma.user.count();
    let result = await prisma.user.findMany({
      take: pageSize, // Number of records to retrieve per page
      skip: skip, // Number of records to skip
      // Add any other conditions or ordering as needed
    });
    return NextResponse.json(
      { status: "success", data: { result, pageSize, pageNumber, total } },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ status: "Fail", result: error.toString() });
  }
}
