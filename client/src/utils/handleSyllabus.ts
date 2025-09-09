import { type SyllabusResponse } from "../types/syllabusResTypes";
// to handle icons
import {
  type LucideIcon,
  BookOpenText,
  CodeXml,
  HelpCircle,
} from "lucide-react";
import { authFetch } from "./fetchToken";

// function to handle axios
// it returns a giant json of data
// we only need the title and some other data
export async function handleSyllabus() {
  try {
    const res = await authFetch("http://localhost:4000/api/syllabus");
    const json: SyllabusResponse = await res.json();
    const data = json.syllabus;
    data.map((item, i) => {
      const type = getType(item.title) || "";
      const icon = getIcon(type);
      return {
        id: i,
        title: item.title,
        type,
        icon: icon,
      };
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("Error fetching syllabus:", message);
    return [];
  }
}

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
function getType(title: string) {
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
