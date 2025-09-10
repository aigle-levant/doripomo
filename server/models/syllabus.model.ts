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
  title: { type: String, required: true },
  tasks: {
    type: [SyllabusTaskSchema],
    validate: {
      validator: (v: any[]) =>
        v.every((task) => task.title && task.title.length > 0),
      message: "All tasks must have a title",
    },
  },
  order: { type: Number, default: 0 },
});

const SyllabusSchema = new Schema<Syllabus>(
  {
    title: { type: String, required: true },
    userId: { type: String, required: true },
    chapters: { type: [SyllabusChapterSchema], default: [] },
  },
  { timestamps: true }
);

export const SyllabusModel = model<Syllabus>("Syllabus", SyllabusSchema);
