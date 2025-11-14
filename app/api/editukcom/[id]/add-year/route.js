import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../../../lib/db.js";
import ukcom from "../../../../../Model/ukcompany.js";

export async function PATCH(request, context) {
  try {
    await connectToDatabase();
    const { id } = await context.params;
    const newYearData = await request.json();
    const companyDoc = await ukcom.findById(id);
    if (!companyDoc) {
      return NextResponse.json(
        { message: "Company not found." },
        { status: 404 }
      );
    }
    const duplicate = companyDoc.data.find(
      (item) => item.from === newYearData.from && item.to === newYearData.to
    );

    if (duplicate) {
      return NextResponse.json(
        { message: "This year already exists" },
        { status: 409 }
      );
    }

    const updated = await ukcom.findByIdAndUpdate(
      id,
      { $push: { data: newYearData } },
      { new: true }
    );

    return NextResponse.json(
      { message: "Year added successfully", data: updated },
      { status: 200 }
    );
  } catch (error) {
    console.error("PATCH ERROR:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
