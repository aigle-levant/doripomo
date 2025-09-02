import { Router } from "express";
import { signup } from "../controllers/auth.controller.js";

export const authRouter = Router();

// default route -> /api/auth
// signup
authRouter.post("/signup", signup);
