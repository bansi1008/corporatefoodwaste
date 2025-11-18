import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../lib/db.js";
import ukdata from "../../../Model/ukcompany.js";

export async function GET() {
  try {
    await connectToDatabase();
    const companies = await ukdata.find({});
    let minFrom = Infinity;
    let maxTo = -Infinity;

    companies.forEach((company) => {
      company.data.forEach((entry) => {
        if (entry.from < minFrom) minFrom = entry.from;
        if (entry.to > maxTo) maxTo = entry.to;
      });
    });

    return NextResponse.json({ minFrom, maxTo }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
