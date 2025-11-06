import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../../lib/db.js";
import Login from "../../../../Model/login.js";
import bcrypt from "bcryptjs";

export async function POST(request) {
  const { email, password } = await request.json();
  await connectToDatabase();

  if (!email || !password) {
    return NextResponse.json(
      { message: "Email and password are required." },
      { status: 400 }
    );
  }
  const user = await Login.findOne({ email });
  if (!user) {
    return NextResponse.json(
      { message: "Invalid email or password." },
      { status: 401 }
    );
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return NextResponse.json(
      { message: "Invalid email or password." },
      { status: 401 }
    );
  }
  return NextResponse.json({ message: "Login successful." }, { status: 200 });
}
