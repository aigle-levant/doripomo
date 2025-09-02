import mongoose from "mongoose";
import { connectionString } from "./mongo";

export async function connectDb() {
  try {
    await mongoose.connect(connectionString);
    console.log("Database connected.");
  } catch (err) {
    console.log("Connection failure.");
    process.exit(1);
  }
}
