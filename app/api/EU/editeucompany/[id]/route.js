import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../../../lib/db.js";
import eucompany from "../../../../../Model/eucompany.js";

export async function PATCH(request, context) {
  const { id } = await context.params;
  const {
    companyName,
    Commitment,
    targetDate,
    TargetMetric,
    Standardised,
    fromBaseline,
    toBaseline,
  } = await request.json();
  try {
    await connectToDatabase();
    const updatedCompany = await eucompany.findByIdAndUpdate(
      id,
      {
        companyName,
        Commitment,
        targetDate,
        TargetMetric,
        Standardised,
        fromBaseline,
        toBaseline,
      },
      { new: true }
    );
    if (!updatedCompany) {
      return NextResponse.json(
        { message: "Company not found." },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: "Company updated successfully.", data: updatedCompany },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(request, context) {
  const { id } = await context.params;
  try {
    await connectToDatabase();
    const deletedCompany = await eucompany.findByIdAndDelete(id);
    if (!deletedCompany) {
      return NextResponse.json(
        { message: "Company not found." },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: "Company deleted successfully." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
