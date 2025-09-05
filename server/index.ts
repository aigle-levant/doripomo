import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import { app, port } from "./config/app.js";
import connectDb from "./config/db.js";

if (!process.env.MONGO_CONNECTION_STRING) {
  throw new Error("MONGO_CONNECTION_STRING is missing in .env");
}

async function startServer() {
  try {
    await connectDb();
    app.listen(port, () => console.log(`Server running on port ${port}`));
  } catch (err) {
    console.error("Server startup failed:", err);
  }
}

startServer();
