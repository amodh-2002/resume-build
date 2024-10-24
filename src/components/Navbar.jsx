import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo-AD.png";
import { Link } from "react-scroll";
import Resume from "./Amodh_BH_Resume1.pdf";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      {/* logo  */}
      <div style={{ cursor: "pointer" }} className="logo"></div>
      {/* menu  */}
      <ul className=" hidden md:flex ">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* hamburger  */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile-menu  */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* social-icons  */}
      <div className="hidden md:flex fixed flex-col top-[35%] left-0 bg-[#152134e3] w-[90px] py-4 rounded-md">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-2">
            <a
              href="https://www.linkedin.com/in/amodh-bh/"
              target="_blank"
              className="text-blue-600 hover:text-blue-700 transition-colors duration-400"
            >
              <FaLinkedin
                size={35}
                className="text-blue-600 hover:shadow-glow-linkedin"
              />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-2">
            <a
              href="https://github.com/amodh-2002"
              target="_blank"
              className="text-green-600 hover:text-green-700 transition-colors duration-400"
            >
              <FaGithub
                size={35}
                className="text-green-600 hover:shadow-glow-github"
              />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-2">
            <a
              href="mailto:amodhbh72@gmail.com"
              target="_blank"
              className="text-red-600 hover:text-red-700 transition-colors duration-400"
            >
              <HiOutlineMail
                size={35}
                className="text-red-600 hover:shadow-glow-mail"
              />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-2">
            <a
              href={Resume}
              download="Amodh_BH_Resume1.pdf"
              className="text-gray-600 hover:text-gray-700 transition-colors duration-400"
            >
              <BsFillPersonLinesFill
                size={35}
                className="text-gray-600 hover:shadow-glow-resume"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
