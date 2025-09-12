import { SyllabusModel } from "../models/syllabus.model.js";
import { type Syllabus } from "../types/syllabus.types.js";
import { Types } from "mongoose";

export async function getAllSyllabus(userId: string) {
  try {
    if (!userId) {
      throw new Error("UserId doesn't exist");
    }
    return await SyllabusModel.find({ userId }).lean();
  } catch (err) {
    const error = err as Error;
    throw new Error("Failed to fetch syllabi: " + error.message);
  }
}

export async function getSyllabusOfTopic(userId: string, topic: string) {
  try {
    if (Types.ObjectId.isValid(topic)) {
      return await SyllabusModel.findOne({ _id: topic, userId }).lean();
    }
    return await SyllabusModel.findOne({
      title: { $regex: new RegExp(topic, "i") },
      userId,
    }).lean();
  } catch (err) {
    const error = err as Error;
    throw new Error("Failed to fetch syllabi: " + error.message);
  }
}

export async function createSyllabus(data: Partial<Syllabus>) {
  if (!data.userId) throw new Error("User ID is required");
  if (!data.title) throw new Error("Title is required");
  const newSyllabus = new SyllabusModel(data);
  return await newSyllabus.save();
}
