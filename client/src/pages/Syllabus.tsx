// hook to handle syllabus
import { useSyllabus } from "../hooks/useSyllabus";
import SyllabusTable from "../components/syllabus/SyllabusTable";

export default function Syllabus() {
  const { syllabus: data, error, isLoading: loading } = useSyllabus();

  //   here comes the skeleton. dun-dun-dun DUN
  if (loading) {
    return (
      <div id="container" className="flex flex-col gap-5 p-4 bg-bg text-text">
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
          className="mt-4 bg-primary-forest btn btn-sm md:btn-md lg:btn-lg"
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
      className="flex flex-col gap-5 bg-bg text-text p-6"
    >
      <h1 className="text-4xl font-heading font-bold text-center">
        Select exam / skill
      </h1>
      <div id="subjects-table-wrapper">
        <SyllabusTable data={data} />
      </div>
      <div id="not-interested-wrapper" className="flex flex-row justify-around">
        <p className="text-body text-medium">Don't see your subject?</p>
        <button className="bg-primary-forest btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
          Create custom
        </button>
      </div>
    </div>
  );
}
