// to handle responses from backend
export type SyllabusResponse = {
  syllabus: Syllabus[]; // store entire res as arr
};

export type Syllabus = {
  title: string; // like ssc cgl, back-end, etc.
  chapters: Chapter[];
};

export type Chapter = {
  title: string; // eg: handling DOM, etc.
  tasks: Tasks[];
};

export type Tasks = {
  title: string; // eg: write a program to change state of btn
  isCompleted?: boolean;
};

// to handle info. between components
// this is info. return by our funct.
// after axios and some other stuff
export type SyllabusData = {
  id: number;
  title: string;
  type: string;
  icon: React.ElementType;
};

// this is for the syllabus table
export type SyllabusTable = {
  data: SyllabusData[];
};

// and this is for the syllabus card
export type SyllabusCard = {
  title: string;
  icon: React.ElementType;
};
