import { type Response } from "express";
import { handleSignup } from "../services/auth.services.js";
import { User } from "../models/user.model.js";
import { type AuthRequest } from "../middleware/auth.middleware.js";

// sign up
export async function signup(req: AuthRequest, res: Response) {
  try {
    const uid = req.auth?.sub;
    const email = req.auth?.email;

    if (req.body.a_password) {
      return res.status(400).json({ message: "BOOOO! Spam detected." });
    }
    if (!uid) return res.status(401).json({ message: "UID is missing." });
    if (!email) return res.status(401).json({ message: "Email is missing." });

    const data = await handleSignup(uid, email);
    return res.json(data);
  } catch (err) {
    return res.status(500).json({ message: "Server unexpectedly failed..." });
  }
}

// profile
export async function profile(req: AuthRequest, res: Response) {
  try {
    const uid = req.auth?.sub;
    if (!uid) {
      return res
        .status(401)
        .json({ message: "Unauthorized. UID is not found." });
    }

    const user = await User.findOne({ uid });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    return res.json(user);
  } catch (err) {
    console.error("Profile error:", err);
    res.status(500).json({ message: "Server error" });
  }
}
