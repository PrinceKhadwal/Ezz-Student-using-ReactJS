import React from "react";
import herobg from "../assets/pics/herobg2.jpg";

const Hero = () => {
  return (
    <>
      <div className="relative" id="home">
        <img
          className="w-full h-96 object-cover mb-4 md:mb-0 object-top shadow-2xl"
          src={herobg}
          alt="background pic"
        />
        <div className="absolute w-11/12 md:w-7/12 top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center px-4 md:px-0">
          <h1 className="font-bold text-2xl md:text-4xl">Welcome to Ezz Student</h1>
          <p className="mt-4 text-sm md:text-base">
            <b>
              A platform for students of Himachal Pradesh Technical University.
            </b>
            <div className="mt-2">
              This Platform is developed by <b>Prince</b>. Here, you have access to MCA & MBA(Coming Soon) course Material like Syllabus, Previous Year Question Papers in pdf format.
            </div>
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
