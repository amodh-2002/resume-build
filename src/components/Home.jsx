import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* container  */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, My Name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Amodh BH
        </h1>
        <h2 className="text-3xl sm:text-6xl font-bold text-[#8892b0]">
          Software Engineer | DevOps Enthusiast
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[1200px]">
          As a Software Engineer with a strong focus on DevOps, I streamline
          development and deployment processes by building scalable applications
          and automating infrastructure. I specialize in optimizing CI/CD
          pipelines and managing cloud environments to ensure efficient,
          reliable software delivery.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 rounded-md">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
