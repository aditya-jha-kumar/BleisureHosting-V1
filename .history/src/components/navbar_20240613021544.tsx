"use client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import {
  RiHome4Line,
  RiInformationLine,
  RiBriefcase4Line,
  RiContactsLine,
} from "react-icons/ri";

interface NavbarProps {
  logoSrc: string;
  logoAlt: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  button1Label: string;
  button2Label: string;
  className?: string; // New className prop
}

const Navbar = ({
  logoSrc,
  logoAlt,
  option1,
  option2,
  option3,
  option4,
  button1Label,
  button2Label,
  className,
}: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`bg-white dark:bg-white z-10 top-0 w-full ${className}`}>
      <div className="mx-auto px-4 md:px-8 py-2 md:py-4 flex items-center justify-between max-w-full">
        <div className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer">
          <img src={logoSrc} className="h-6 md:h-8" alt={logoAlt} />
          <span className="text-lg md:text-2xl font-semibold whitespace-nowrap dark:text-black">
            {logoAlt}
          </span>
        </div>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-black bg-white border-black border-2 focus:ring-4 font-medium rounded-lg text-sm px-3 md:px-4 py-1 md:py-2 text-center transition duration-300 ease-in-out hover:bg-black hover:text-white hover:border-gray-800"
          >
            {button1Label}
          </button>
          <button
            type="button"
            className="text-white bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 md:px-4 py-1 md:py-2 text-center dark:bg-blue-600 dark:focus:ring-blue-800 transition duration-300 ease-in-out hover:bg-blue-800 hover:border-blue-800"
          >
            {button2Label}
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 transition duration-300 ease-in-out"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <FaBars className="w-5 h-5" />
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col md:flex-row p-2 md:p-0 mt-2 md:mt-0 font-medium border-t border-gray-200 md:border-none bg-white md:bg-transparent md:space-x-4 rtl:space-x-reverse">
            <li>
              <button
                className="nav-link hover:text-blue-700"
                aria-label={option1}
              >
                <span className="nav-text hidden md:inline">{option1}</span>
              </button>
            </li>
            <li>
              <button
                className="nav-link hover:text-blue-700"
                aria-label={option2}
              >
                <span className="nav-text hidden md:inline">{option2}</span>
              </button>
            </li>
            <li>
              <button
                className="nav-link hover:text-blue-700"
                aria-label={option3}
              >
                <span className="nav-text hidden md:inline">{option3}</span>
              </button>
            </li>
            <li>
              <button
                className="nav-link hover:text-blue-700"
                aria-label={option4}
              >
                <span className="nav-text hidden md:inline">{option4}</span>
              </button>
            </li>
            <li>
              <button
                className="nav-link hover:text-blue-700"
                aria-label="Become a partner"
              ></button>
            </li>
            <li>
              <button
                className="nav-link hover:text-blue-700"
                aria-label="Sign up"
              ></button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
