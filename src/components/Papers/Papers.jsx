import { useState } from "react";

const Papers = ({ data, title }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div
      className="max-w-screen-md mx-auto mt-10 mb-10 px-4 sm:px-6 lg:px-8"
      id="papers"
    >
      <div className="space-y-4">
        <h1 className="text-center font-bold text-2xl sm:text-3xl">{title}</h1>

        {data.map((item, index1) => (
          <div className="bg-white shadow-md rounded-lg" key={index1}>
            <div
              className="flex justify-between items-center p-4 cursor-pointer bg-gray-200 hover:bg-gray-300 rounded-t-lg"
              onClick={() => toggleAccordion(index1)}
            >
              <h2 className="text-sm sm:text-md font-semibold">
                {item.subject_title} ({item.subject_code})
              </h2>
              <span>{activeIndex === index1 ? "-" : "+"}</span>
            </div>

            {activeIndex === index1 && (
              <div className="p-4 bg-gray-50 border-t">
                {item.question_papers.map((paper, index2) => (
                  <div
                    className="flex flex-col sm:flex-row justify-between"
                    key={index2}
                  >
                    <div>Session: {paper.session}</div>
                    <a
                      href={paper.paper_link}
                      target="_blank"
                      className="text-blue-500 hover:underline"
                    >
                      Click here to download
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Papers;
