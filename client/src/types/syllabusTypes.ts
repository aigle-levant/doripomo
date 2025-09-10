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
  icon: React.ElementType;
};

export type SyllabusCard = {
  title: string;
  icon: React.ElementType;
};

export type SyllabusTable = {
  data: SyllabusData[];
};
