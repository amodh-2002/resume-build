import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import Python from "../assets/python.png";
import Matlab from "../assets/matlab.png";
import AWS from "../assets/aws.png";
import Terraform from "../assets/terraform.png";
import Docker from "../assets/docker.png";
import Kubernetes from "../assets/kubernetes.png";
import Github from "../assets/github.png";
import Ado from "../assets/ado.png";
import Jenkins from "../assets/Jenkins.png";
import Linux from "../assets/Linux.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full min-h-screen bg-[#0a192f] text-gray-300 overflow-hidden"
    >
      <div className="max-w-[1000px] mx-auto px-4 md:px-8 flex flex-col justify-center h-full py-16">
        <div className="mb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-6">// These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto my-4" src={AWS} alt="" />
            <p className="my-4">AWS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto my-4" src={Terraform} alt="" />
            <p className="my-4">Terraform</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto my-4" src={Kubernetes} alt="" />
            <p className="my-4">Kubernetes</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto my-4" src={Docker} alt="" />
            <p className="my-4">Docker</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto my-4" src={Github} alt="" />
            <p className="my-4">Github</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto my-4" src={Ado} alt="" />
            <p className="my-4">Azure DevOps</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto my-4" src={Jenkins} alt="" />
            <p className="my-4">Jenkins</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto my-4" src={JavaScript} alt="" />
            <p className="my-4">Javascript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto my-4" src={ReactImg} alt="" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto my-4" src={Node} alt="" />
            <p className="my-4">Node</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto my-4" src={Python} alt="" />
            <p className="my-4">Python</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto my-4" src={Linux} alt="" />
            <p className="my-4">Linux</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
