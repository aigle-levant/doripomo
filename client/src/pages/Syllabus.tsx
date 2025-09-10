import { useState, useEffect } from "react";
// to handle data coming from handleSyllabus
import { type SyllabusData } from "../types/syllabusTypes";
import { handleSyllabus } from "../utils/handleSyllabus";
import SyllabusTable from "../components/syllabus/SyllabusTable";

export default function Syllabus() {
  // loading state for the skeleton
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  // store syllabus and throw it to table
  //   this is initially an empty arr
  const [data, setData] = useState<SyllabusData[]>([]);
  useEffect(() => {
    let isMounted = true;

    const fetchSyllabus = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await handleSyllabus();
        if (isMounted) {
          setData(res ?? []);
        }
      } catch (err: unknown) {
        if (isMounted) {
          const message = err instanceof Error ? err.message : String(err);
          setError(message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchSyllabus();

    return () => {
      isMounted = false;
    };
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
  // error state
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center p-6 text-red-600">
        <h2 className="text-xl font-bold">Failed to load syllabus</h2>
        <p className="text-sm">{error}</p>
      </div>
    );
  }
  // this is a stupid error
  // but what if my syllabus doesnt load?
  if (!data.length) {
    return (
      <div className="flex flex-col items-center justify-center p-6 text-gray-500">
        <h2 className="text-xl font-semibold">No syllabus found</h2>
        <p className="text-sm">Try creating a custom syllabus.</p>
        <button
          className="mt-4 bg-secondary-matcha btn btn-sm md:btn-md lg:btn-lg"
          aria-label="Create custom syllabus"
        >
          Create custom
        </button>
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
