import { auth } from "../config/firebase.js";
import { type Request, type Response, type NextFunction } from "express";

export interface AuthRequest extends Request {
  user?: any;
}

export async function authenticateToken(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  try {
    // get auth header
    const header = req.headers.authorization;
    // if no header exists
    if (!header || !header.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ message: "Unauthorized. No token provided." });
    }

    //   get token from header
    const token = header.split(" ")[1] || "";

    //   verify the token
    const decode = await auth.verifyIdToken(token);
    req.user = decode;
    next();
  } catch (err) {
    return res
      .status(401)
      .json({ message: "Unauthorized. No token provided." });
  }
}
