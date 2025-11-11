import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../../lib/db.js";
import ukdata from "../../../../Model/ukdata.js";

export async function GET() {
  try {
    await connectToDatabase();
    const data = await ukdata.find({});
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error in /api/getukdata:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}

// Explicitly define runtime (optional, but can help with Vercel)
export const dynamic = 'force-dynamic';
