import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Yuvraj, nice to meet you. </p>
          </div>
          <div>
            <p>
              I'm a computer science student who loves programming and has a
              passion for software development. Seeking for opportunities where
              I can use my skills in a dynamic and collaborative environment.
              Proven success as a Software Developer Intern in SmartBin INC and
              Molecular Biology Research Assistant at Memorial University of Newfoundland.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
