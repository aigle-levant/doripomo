import { type SyllabusCard } from "../../types/syllabusTypes";

export default function SyllabusCard({ title, icon: Icon }: SyllabusCard) {
  return (
    <div
      id="skill-card-wrapper"
      className="flex flex-row justify-between rounded-full"
    >
      <div id="skill-text-wrapper" className="flex flex-col gap-4">
        <div className="flex flex-row">
          <Icon className="h-6 w-6" />;
          <p className="font-body font-medium">{title}</p>
        </div>
      </div>
      <div id="go-wrapper">
        <button className="btn btn-soft dark:bg-secondary-matcha">
          Select
        </button>
      </div>
    </div>
  );
}
