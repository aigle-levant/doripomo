import { Document } from "mongoose";

export interface SyllabusTask {
  title: string;
  isCompleted?: boolean;
}

export interface SyllabusChapter {
  title: string;
  tasks: SyllabusTask[];
}

export interface Syllabus extends Document {
  title: string;
  chapters: SyllabusChapter[];
}
