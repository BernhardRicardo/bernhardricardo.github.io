"use client";
import { useState } from "react";
import ScrollLink from "../ScrollLink";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between sticky top-0 flex-wrap bg-white py-6 px-11 z-50">
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-black hover:border-black"
          onClick={toggleMenu}
        >
          {/* Sandwich Button Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } w-full block flex-grow justify-end lg:flex lg:items-center lg:w-auto`}
      >
        <ScrollLink to="#home">Home</ScrollLink>
        <ScrollLink to="#about">About</ScrollLink>
        <ScrollLink to="#projects">Projects</ScrollLink>
        <ScrollLink to="#contact">Contact</ScrollLink>
      </div>
    </nav>
  );
}

export default Header;
