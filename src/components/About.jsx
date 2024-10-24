import React from "react";
import MyPic from "../assets/mypic.jpg";

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
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 justify-center items-center">
          <div className="sm:text-right text-4xl font-bold flex flex-col items-center gap-6">
            <img
              src={MyPic}
              alt="Amodh BH"
              className="rounded-full w-64 h-64 object-cover mx-auto"
            />
            <h1>Amodh BH</h1>
          </div>
          <div>
            <p className="text-lg">
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
