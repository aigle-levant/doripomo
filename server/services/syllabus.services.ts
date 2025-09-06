import { SyllabusModel } from "../models/syllabus.model.js";
import { type Syllabus } from "../types/syllabus.types.js";
import { Types } from "mongoose";

export async function getAllSyllabus() {
  try {
    return await SyllabusModel.find().lean();
  } catch (err) {
    const error = err as Error;
    throw new Error("Failed to fetch syllabi: " + error.message);
  }
}

export async function getSyllabusOfTopic(topic: string) {
  try {
    if (Types.ObjectId.isValid(topic)) {
      return await SyllabusModel.findById(topic).lean();
    }
    return await SyllabusModel.findOne({
      title: { $regex: new RegExp(topic, "i") },
    }).lean();
  } catch (err) {
    const error = err as Error;
    throw new Error("Failed to fetch syllabi: " + error.message);
  }
}

export async function createSyllabus(data: Partial<Syllabus>) {
  if (!data.title) throw new Error("Title is required");
  const newSyllabus = new SyllabusModel(data);
  return await newSyllabus.save();
}
