import { type LucideIcon } from "lucide-react";

export type SyllabusTask = {
  _id: string;
  title: string;
  isCompleted: boolean;
};

export type SyllabusChapter = {
  _id: string; // Mongo auto _id
  title: string;
  tasks: SyllabusTask[];
  order: number;
};

export type Syllabus = {
  _id: string;
  title: string;
  userId: string;
  chapters: SyllabusChapter[];
  createdAt: string;
  updatedAt: string;
};

export type SyllabusData = {
  id: string;
  title: string;
  type: string;
  icon: LucideIcon;
};

export type SyllabusCardProps = Pick<SyllabusData, "title" | "icon">;

export type SyllabusTable = {
  data: SyllabusData[];
};
