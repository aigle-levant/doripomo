import { type SyllabusTable } from "../../types/syllabusResTypes";
import SyllabusCard from "./SyllabusCard";

export default function SyllabusTable({ data }: SyllabusTable) {
  return (
    <div
      id="subjects-container"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
    >
      {data.map((item) => (
        <SyllabusCard key={item.id} title={item.title} icon={item.icon} />
      ))}
    </div>
  );
}
