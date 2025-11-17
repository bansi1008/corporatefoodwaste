import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../lib/db.js";
import contact from "../../../Model/contact.js";

export async function GET() {
  try {
    await connectToDatabase();
    const data = await contact.find({});
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }
    await connectToDatabase();
    const newContact = new contact({
      name,
      email,
      subject,
      message,
    });
    await newContact.save();
    return NextResponse.json(
      { message: "Contact message saved successfully." },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
