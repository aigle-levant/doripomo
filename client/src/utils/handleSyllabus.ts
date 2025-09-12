import { type Syllabus, type SyllabusData } from "../types/syllabusTypes";
// handles icons
import { getIcon, getType } from "./getIcon";
import { AuthFetch } from "./authFetch";

// function to handle axios
// it returns a giant json of data
// we only need the title and some other data
export async function handleSyllabus(): Promise<SyllabusData[]> {
  try {
    // create fetcher bound to syllabus API
    const fetcher = AuthFetch("http://localhost:4000/api/syllabus");

    // call it (with no options for GET)
    const res = await fetcher();

    if (!res.ok) throw new Error(`HTTP error: ${res.status}`);

    const data: Syllabus[] = await res.json();

    return data.map((item) => {
      const type = getType(item.title) || "default";
      const icon = getIcon(type);
      return {
        id: item._id,
        title: item.title,
        type,
        icon,
      };
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("Error fetching syllabus:", message);
    return [];
  }
}
