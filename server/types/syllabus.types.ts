import { Document } from "mongoose";

export interface SyllabusTask {
  title: string;
  isCompleted?: boolean;
}

export interface SyllabusChapter {
  title: string;
  tasks: SyllabusTask[];
  order?: number;
}

export interface Syllabus extends Document {
  title: string;
  userId: string;
  chapters: SyllabusChapter[];
  createdAt: Date;
  updatedAt: Date;
}
