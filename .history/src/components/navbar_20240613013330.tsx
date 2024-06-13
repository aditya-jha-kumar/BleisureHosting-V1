"use client"
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RiHome4Line, RiInformationLine, RiBriefcase4Line, RiContactsLine } from "react-icons/ri";

interface NavbarProps {
  logoSrc: string;
  logoAlt: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  button1Label: string;
  button2Label: string;
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
}: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white dark:bg-white fixed w-full z-20 top-0 border-b">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer">
          <img src={logoSrc} className="h-8" alt={logoAlt} />
          <span className="text-2xl font-semibold whitespace-nowrap dark:text-black">
            {logoAlt}
          </span>
        </div>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-black bg-white border-black border-2 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 text-center transition duration-300 ease-in-out hover:bg-black hover:text-white hover:border-gray-800"
          >
            {button1Label}
          </button>
          <span className="px-2 py-2">|</span>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition duration-300 ease-in-out"
          >
            {button2Label}
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 transition duration-300 ease-in-out"
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
          <ul className="flex flex-col md:flex-row p-4 md:p-0 mt-4 font-medium border-t border-gray-200 md:border-none bg-white md:bg-transparent md:space-x-8 rtl:space-x-reverse">
            <li>
              <button className="nav-link" aria-label={option1}>
                <RiHome4Line className="nav-icon" />
                <span className="nav-text">{option1}</span>
              </button>
            </li>
            <li>
              <button className="nav-link" aria-label={option2}>
                <RiInformationLine className="nav-icon" />
                <span className="nav-text">{option2}</span>
              </button>
            </li>
            <li>
              <button className="nav-link" aria-label={option3}>
                <span className="nav-text">{option3}</span>
              </button>
            </li>
            <li>
              <button className="nav-link" aria-label={option4}>
                <span className="nav-text">{option4}</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
