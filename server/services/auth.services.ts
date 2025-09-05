import { User } from "../models/user.model.js";

export async function handleSignup(uid: string, email: string) {
  try {
    if (!uid || !email) {
      throw new Error("Invalid UID or email");
    }
    let user = await User.findOne({ uid });
    //   if user not found, create a user
    if (user) {
      return user;
    }
    const newUser = await User.create({ uid, email });
    return newUser;
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("handleSignup error:", message);
    throw new Error("Signup failed. Please try again.");
  }
}
