import React, { useState } from "react";
import { Link } from "react-scroll";
import { RiCloseFill } from "react-icons/ri";
import { CgMenuMotion } from "react-icons/cg";
import MobileNavbar from "./MobileNavbar";
import logo from '../assets/pics/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {isMenuOpen && <MobileNavbar isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>}

      <div className="w-screen hidden md:flex items:center justify-center py-4 fixed top-0 z-10">
        <nav className="max-w-screen-2xl rounded-xl bg-blue-500  mx-auto py-1 px-6 text-white">
          <ul className="flex items-center gap-8">
            <li>
              <Link to="#" smooth spy offset={-80} className="menu-item">
                <img src={logo} alt="logo" className="w-12 h-12"/>
              </Link>
            </li>
            <li>
              <Link to="home" smooth spy offset={-80} className="menu-item hover:text-yellow-300 transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="curriculum" smooth spy offset={-80} className="menu-item hover:text-yellow-300 transition duration-300">
                Curriculum
              </Link>
            </li>
            <li>
              <Link to="papers" smooth spy offset={-80} className="menu-item hover:text-yellow-300 transition duration-300">
                Que. Papers
              </Link>
            </li>
            <li>
              <Link to="aboutus" smooth spy offset={-80} className="menu-item hover:text-yellow-300 transition duration-300">
                About Us
              </Link>
            </li>
            <li>
              <Link to="contactus" smooth spy offset={-80} className="menu-item hover:text-yellow-300 transition duration-300">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="p-3 fixed top-0 right-0 z-50">
        <button
          onClick={() => toggleMenu()}
          className="w-11 h-11 text-4xl text-white bg-blue-500 border border-transparent backdrop-blur-lg flex items-center justify-center rounded-full shadow-lg md:hidden ml-auto transition duration-300 hover:bg-blue-600"
        >
          {isMenuOpen ? <RiCloseFill /> : <CgMenuMotion />}
        </button>
      </div>
    </>
  );
};

export default Navbar;
