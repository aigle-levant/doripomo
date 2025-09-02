import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { authRouter } from "../routes/auth.routes.js";

dotenv.config({ path: "../.env" });

// env variables
export const port = process.env.PORT || 4000;

export const app = express();

app.use(cors);
app.use(express.json());

// routes
app.use("/api/auth", authRouter);
