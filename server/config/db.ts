import mongoose from "mongoose";
import { connect } from "./mongo.js";

export default async function connectDb() {
  try {
    await mongoose.connect(connect);
    console.log("Database connected.");
  } catch (err) {
    console.log("Connection failure.");
    process.exit(1);
  }
}
