"use client";
import { useEffect } from "react";

function ScrollLink({ to, children }) {
  const scrollToSection = (e) => {
    e.preventDefault();
    const section = document.querySelector(to);

    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const element = document.querySelector(to);
    if (element) {
      element.setAttribute("tabIndex", "-1");
    }
  }, [to]);

  return (
    <a
      className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-4"
      href="#"
      onClick={scrollToSection}
    >
      {children}
    </a>
  );
}

export default ScrollLink;
