import mongoose from "mongoose";

const loginSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    collection: "logins",
  }
);

export default mongoose.models.Login || mongoose.model("Login", loginSchema);
