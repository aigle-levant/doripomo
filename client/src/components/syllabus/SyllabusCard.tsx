import { type SyllabusCardProps } from "../../types/syllabusTypes";

export default function SyllabusDataCard({
  title,
  icon: Icon,
}: SyllabusCardProps) {
  return (
    <div
      id="skill-card-wrapper"
      className="flex flex-row justify-between rounded-full"
    >
      <div id="skill-text-wrapper" className="flex flex-col gap-4">
        <div className="flex flex-row">
          <Icon className="w-5 h-5" />
          <p className="font-body font-medium">{title}</p>
        </div>
      </div>
      <div id="go-wrapper">
        <button className="btn btn-soft dark:bg-primary-forest">Select</button>
      </div>
    </div>
  );
}
