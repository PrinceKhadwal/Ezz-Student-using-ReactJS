import syllabusicon from "../../assets/pics/syllabusicon.png";

const Syllabus = ({ link, title }) => {
  return (
    <>
      <div className="max-w-4xl mx-auto py-16 px-4" id="curriculum">
        <h2 className="text-3xl font-bold text-center mb-8">
          Course Curriculum ({title})
        </h2>
        <div className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
          <div className="flex justify-center items-center">
            <img
              src={syllabusicon}
              alt="Syllabus Icon"
              className="w-24 h-24 sm:w-36 sm:h-40"
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between items-center">
            <div className="mb-4 sm:mb-0">Current Syllabus of {title}:</div>
            <a
              href={link}
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              Click here to download syllabus
            </a>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between items-center">
            <div className="mb-4 sm:mb-0">
              Link to Official Course Curriculum :{" "}
            </div>
            <a
              href="https://www.himtu.ac.in/post-graduate-courses/"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              Click here
            </a>
          </div>

          <div>
            <b>Note:</b>
            <p>
              This is an Unofficial website. If there is any change in the
              Curriculum by the university, we are not responsible for it.
              Kindly refer to the official website of the university for updated
              Curriculum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Syllabus;
