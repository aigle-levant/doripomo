import "dotenv/config";
import connectDb from "./config/db.js";
import { limiter } from "./utils/rateLimit.js";
import express from "express";
import cors from "cors";
import { authRouter } from "./routes/auth.routes.js";
import helmet from "helmet";
import { port } from "./config/config.js";

// env variables

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

// routes
app.use("/api/auth", limiter, authRouter);

const serverPort = port || 4000;

async function startServer() {
  try {
    await connectDb();
    app.listen(serverPort, () =>
      console.log(`Server running on port ${serverPort}`)
    );
  } catch (err) {
    console.error("Server startup failed:", err);
  }
}

startServer();
