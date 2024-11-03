import React from "react";
import MyPic from "../assets/mypic.jpg";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-[#0a192f] text-gray-300 overflow-hidden"
    >
      <div className="flex flex-col justify-center items-center h-full py-16 px-4 md:px-8 mx-auto max-w-[1000px]">
        <div className="max-w-[1000px] w-full grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="text-center sm:text-right text-3xl sm:text-4xl font-bold flex flex-col items-center gap-6">
            <img
              src={MyPic}
              alt="Amodh BH"
              className="rounded-full w-48 sm:w-64 h-48 sm:h-64 object-cover"
            />
            <h1>Amodh BH</h1>
          </div>
          <div className="text-base sm:text-lg px-2 sm:px-0">
            <p className="text-lg text-justify">
              I'm a Software Engineer passionate about DevOps, cloud
              technologies, and web development. I focus on streamlining the
              software development lifecycle with tools like Docker, Kubernetes,
              and cloud platforms such as AWS. My expertise spans automating
              infrastructure, optimizing CI/CD pipelines, and ensuring efficient
              application delivery. In addition, I enjoy creating responsive and
              interactive web applications using React, JavaScript, and modern
              CSS frameworks. Outside of tech, I’m a huge Formula 1 fan, drawn
              to the sport's precision and innovation, much like my approach to
              continuous improvement in software development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
