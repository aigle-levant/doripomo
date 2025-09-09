// to handle req.user not functioning due to express
import { type AuthRequest } from "../middleware/auth.middleware.js";
import { type Response } from "express";
import { handleSignup } from "../services/auth.services.js";
import { User } from "../models/user.model.js";

// sign up
export async function signup(req: AuthRequest, res: Response) {
  try {
    const uid = req.user?.uid;
    const email = req.user?.email ?? null;
    // kick out bots
    if (req.body.a_password) {
      return res.status(400).json({ message: "BOOOO! Spam detected." });
    }
    if (!uid || !email) {
      return res.status(401).json({ message: "Unauthorized. No user info." });
    }
    const data = await handleSignup(uid, email);
    return res.json(data);
  } catch (err) {
    return res.status(500).json({ message: "Server unexpectedly failed..." });
  }
}

// profile
export async function profile(req: AuthRequest, res: Response) {
  try {
    const uid = req.user?.uid;
    // unauthorized person - get out!
    if (!uid) {
      return res.status(401).json({ message: "Unauthorized." });
    }
    const user = await User.findOne({ uid });
    // deal with non-existent user
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }
    return res.json(user);
  } catch (err) {
    console.error("Profile error:", err);
    res.status(500).json({ message: "Server error" });
  }
}
