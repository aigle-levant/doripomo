import { limiter } from "./../utils/rateLimit.js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { authRouter } from "../routes/auth.routes.js";
import helmet from "helmet";

dotenv.config({ path: "../.env" });

// env variables
export const port = process.env.PORT || 4000;

export const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

// routes
app.use("/api/auth", limiter, authRouter);
