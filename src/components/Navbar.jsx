import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import Resume from "./Amodh_BH_Resume1.pdf";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-50">
      <div>
        <Link to="home" smooth={true} duration={500}>
          <h1 className="text-2xl sm:text-3xl font-bold text-pink-600 cursor-pointer">
            AB
          </h1>
        </Link>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex items-center">
        <li className="hover:text-pink-600 px-2 md:px-3 text-sm lg:text-base whitespace-nowrap">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:text-pink-600 px-2 md:px-3 text-sm lg:text-base whitespace-nowrap">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:text-pink-600 px-2 md:px-3 text-sm lg:text-base whitespace-nowrap">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="hover:text-pink-600 px-2 md:px-3 text-sm lg:text-base whitespace-nowrap">
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="hover:text-pink-600 px-2 md:px-3 text-sm lg:text-base whitespace-nowrap">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl hover:text-pink-600">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-pink-600">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-pink-600">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-pink-600">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-pink-600">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 z-40">
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
