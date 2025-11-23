import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../../../../lib/db.js";
import eucomdata from "../../../../../../Model/eucomdata.js";

export async function PATCH(request, context) {
  const { id } = await context.params;
  try {
    await connectToDatabase();
    const { from, to, updates } = await request.json();

    const setObj = {};
    Object.keys(updates).forEach((key) => {
      setObj[`data.$.${key}`] = updates[key];
    });

    setObj["data.$.from"] = from;
    setObj["data.$.to"] = to;

    const updated = await eucomdata.findOneAndUpdate(
      { _id: id, "data.from": from, "data.to": to },
      { $set: setObj },
      { new: true }
    );
    if (!updated) {
      return NextResponse.json({ message: "Year not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Year updated successfully", data: updated },
      { status: 200 }
    );
  } catch (error) {
    console.error("GET ERROR:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
