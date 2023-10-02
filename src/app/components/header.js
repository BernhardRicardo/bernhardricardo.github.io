"use client";
import { useState } from "react";
import ScrollLink from "../ScrollLink";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-end sticky top-0 flex-wrap bg-white py-6 px-11 md:z-50 -z-10">
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
