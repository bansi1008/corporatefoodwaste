import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../../../../lib/db.js";
import eucomdata from "../../../../../../Model/eucomdata.js";

export async function PATCH(request, context) {
  try {
    await connectToDatabase();
    const { id } = await context.params;
    const { from, to } = await request.json();
    const updated = await eucomdata.findByIdAndUpdate(
      id,
      { $pull: { data: { from, to } } },
      { new: true }
    );
    if (!updated) {
      return NextResponse.json(
        { message: "Company not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Year deleted successfully", data: updated },
      { status: 200 }
    );
  } catch (error) {
    console.error("POST ERROR:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
