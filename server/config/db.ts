import mongoose from "mongoose";
import { mongoConnectionString } from "./config.js";

const connect = mongoConnectionString || "";

export default async function connectDb() {
  if (connect.length === 0 || connect === "") {
    console.log("Mongo connection string is empty");
  }
  try {
    await mongoose.connect(connect);
    console.log("Database connected.");
  } catch (err) {
    console.log("Connection failure.", err);
    process.exit(1);
  }
}
