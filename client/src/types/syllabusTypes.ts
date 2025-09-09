export type SyllabusIconProps = {
  id: number;
  title: string;
  desc: string;
  type: string;
  icon: React.ElementType;
};

export type SkillCardProps = {
  title: string;
  icon: React.ElementType;
};

export type SyllabusSubjectsTableProps = {
  subjects: SyllabusIconProps[];
};

export type ChapterRaw = {
  title: string;
  tasks: { title: string }[];
};

export type SyllabusRaw = {
  title: string;
  chapters: ChapterRaw[];
};

export type SyllabusResponse = {
  syllabi: SyllabusRaw[];
};
