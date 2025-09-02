// to handle req.user not functioning due to express
import { AuthRequest } from "../middleware/auth.middleware";
import { Request, Response } from "express";
import { handleSignup } from "../services/auth.services";

// sign up
export async function signup(req: AuthRequest, res: Response) {
  try {
    const { uid, email, name } = req.user;
    const data = await handleSignup(uid, email, name);
    return res.json(data);
  } catch (err) {
    return res.status(500).json({ message: "Server unexpectedly failed..." });
  }
}
