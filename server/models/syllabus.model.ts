import { Schema, model } from "mongoose";
// types
import {
  type Syllabus,
  type SyllabusChapter,
  type SyllabusTask,
} from "../types/syllabus.types.js";

const SyllabusTaskSchema = new Schema<SyllabusTask>({
  title: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

const SyllabusChapterSchema = new Schema<SyllabusChapter>({
  title: {
    type: String,
    required: true,
  },
  tasks: [SyllabusTaskSchema],
});

const SyllabusSchema = new Schema<Syllabus>({
  title: {
    type: String,
    required: true,
  },
  chapters: [SyllabusChapterSchema],
});

export const SyllabusModel = model<Syllabus>("Syllabus", SyllabusSchema);
