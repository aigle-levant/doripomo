import mongoose from "mongoose";
import { connectionString } from "./mongo.js";

export default async function connectDb() {
  try {
    await mongoose.connect(connectionString);
    console.log("Database connected.");
  } catch (err) {
    console.log("Connection failure.");
    process.exit(1);
  }
}
