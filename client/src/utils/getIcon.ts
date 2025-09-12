import {
  type LucideIcon,
  BookOpenText,
  CodeXml,
  HelpCircle,
} from "lucide-react";

// icon map
const icons: Record<string, LucideIcon> = {
  exam: BookOpenText,
  programming: CodeXml,
  default: HelpCircle,
};

// a function to handle icons and other stuff
export function getIcon(type: string) {
  return icons[type] || icons["default"];
}

// a function to handle the icon i should get from
// syllabus titles
export function getType(title: string) {
  const syllabusTitle = title.toLowerCase();
  if (syllabusTitle.includes("dev")) return "programming";
  if (
    syllabusTitle.includes("ssc") ||
    syllabusTitle.includes("jee") ||
    syllabusTitle.includes("neet") ||
    syllabusTitle.includes("cgl") ||
    syllabusTitle.includes("board")
  )
    return "exam";
}
