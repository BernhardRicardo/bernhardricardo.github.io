import { useEffect, useState } from "react";

function ScrollLink({ to, children }) {
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToSection = (e) => {
    e.preventDefault();

    if (isScrolling) {
      return;
    }

    const section = document.querySelector(to);

    if (section) {
      setIsScrolling(true);
      const offset = section.getBoundingClientRect().top;

      window.scrollTo({
        top: window.scrollY + offset,
        behavior: "smooth",
      });

      const scrollEndListener = () => {
        setIsScrolling(false);
        window.removeEventListener("scroll", scrollEndListener);
      };

      window.addEventListener("scroll", scrollEndListener);
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
      className="block mt-4 text-right lg:inline-block lg:mt-0 text-black hover:text-black mr-4"
      href="#"
      onClick={scrollToSection}
    >
      {children}
    </a>
  );
}

export default ScrollLink;
