import { useState, useEffect } from "react";
// to handle data coming from handleSyllabus
import { type SyllabusData } from "../types/syllabusResTypes";
import { handleSyllabus } from "../utils/handleSyllabus";
import SyllabusTable from "../components/syllabus/SyllabusTable";

export default function Syllabus() {
  // loading state for the skeleton
  const [loading, setLoading] = useState(true);
  // store syllabus and throw it to table
  //   this is initially an empty arr
  const [data, setData] = useState<SyllabusData[]>([]);
  useEffect(() => {
    const fetchSyllabus = async () => {
      try {
        // trigger loading skeleton
        setLoading(true);
        // NO ARGS PASSED!
        const res = await handleSyllabus();
        setData(res ?? []);
      } finally {
        setLoading(false);
      }
    };
    fetchSyllabus();
  }, []);

  //   here comes the skeleton. dun-dun-dun DUN
  if (loading) {
    return (
      <div id="container" className="flex flex-col gap-5 p-4">
        <div className="skeleton h-6 w-1/2 mx-auto"></div>
        <div id="syllabus-content" className="flex gap-6 justify-center">
          <div className="skeleton h-32 w-64"></div>
          <div className="skeleton h-32 w-64"></div>
        </div>
        <div className="skeleton h-24 w-full"></div>
      </div>
    );
  }
  return (
    <div
      id="syllabus-wrapper"
      className="flex flex-col gap-5 bg-pale dark:bg-night text-night dark:text-pale p-6"
    >
      <h1 className="text-4xl font-heading font-bold text-center">
        Select exam / skill
      </h1>
      <div id="subjects-table-wrapper">
        <SyllabusTable data={data} />
      </div>
      <div id="not-interested-wrapper" className="flex flex-row justify-around">
        <p className="text-body text-medium">Don't see your subject?</p>
        <button className="bg-secondary-matcha btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
          Create custom
        </button>
      </div>
    </div>
  );
}
