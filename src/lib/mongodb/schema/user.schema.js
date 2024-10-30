import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    clerkUserId: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordEnabled: { type: Boolean, required: true },
    bio: { type: String },
    role: { type: String, default: "member" },
    profileImage: { type: String },
    emailVerified: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model("user", UserSchema);
