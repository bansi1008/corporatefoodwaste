import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectToDatabase } from "../../../../lib/db.js";
import Login from "../../../../Model/login.js";
export async function POST(request) {
  const { email, password } = await request.json();
  await connectToDatabase();

  if (!email || !password) {
    return NextResponse.json(
      { message: "Email and password are required." },
      { status: 400 }
    );
  }
  const existingUser = await Login.findOne({ email });
  if (existingUser) {
    return NextResponse.json(
      { message: "User already exists." },
      { status: 409 }
    );
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new Login({ email, password: hashedPassword });
  await newUser.save();
  return NextResponse.json({ message: "Signup successful." }, { status: 201 });
}
