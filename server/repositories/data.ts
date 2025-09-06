import mongoose from "mongoose";
import connectDb from "../config/db.js";
import { SyllabusModel } from "../models/syllabus.model.js";
import syllabi from "../data/syllabus.json" with { type: "json" };

async function seedDbWithSyllabi() {
  try {
    await connectDb();
    await SyllabusModel.deleteMany({});
    const docs = syllabi.syllabi;
    await SyllabusModel.insertMany(docs);
    console.log("Syllabus inserted successfully");
    process.exit(0);
  } catch (err) {
    console.error("Failed to insert syllabi. ", err);
    process.exit(1);
  }
}
seedDbWithSyllabi();
