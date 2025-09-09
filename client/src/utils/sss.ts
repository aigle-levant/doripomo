import {
  type SyllabusIconProps,
  type SyllabusResponse,
} from "../types/syllabusTypes";
import { BookOpenText, CodeXml, HelpCircle } from "lucide-react";
import { type LucideIcon } from "lucide-react";
import axios from "axios";

export async function handleSyllabus(): Promise<SyllabusIconProps[]> {
  try {
    const res = await axios.get<SyllabusResponse>(
      "http://localhost:4000/api/syllabus"
    );

    return res.data.syllabi.map((item, idx) => {
      const type = getTypeFromTitle(item.title);

      return {
        id: idx,
        title: item.title,
        desc: `${item.chapters.length} chapters`,
        type,
        icon: getSyllabusIcons(type),
      };
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("Error fetching syllabus:", message);
    return [];
  }
}

const iconMap: Record<string, LucideIcon> = {
  exam: BookOpenText,
  programming: CodeXml,
  default: HelpCircle,
};

export function getSyllabusIcons(type: string): LucideIcon {
  return iconMap[type] || iconMap.default;
}

function getTypeFromTitle(title: string): string {
  if (title.toLowerCase().includes("development")) return "programming";
  if (title.toLowerCase().includes("ssc")) return "exam";
  return "default";
}
