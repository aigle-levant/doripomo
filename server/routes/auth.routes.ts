import { Router } from "express";

export const authRouter = Router();

// default route -> /api/auth
// signup
authRouter.post("/signup");
