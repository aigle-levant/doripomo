import { Router } from "express";
import { profile, signup } from "../controllers/auth.controller.js";
import { authenticateToken } from "../middleware/auth.middleware.js";

export const authRouter = Router();

// default route -> /api/auth
// signup
authRouter.post("/signup", signup);
authRouter.get("/profile", authenticateToken, profile);
