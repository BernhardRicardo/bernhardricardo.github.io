import { useEffect, useState } from "react";

function ScrollLink({ to, children }) {
  const [isScrolling, setIsScrolling] = useState(false);

  const isMobileDevice = /Mobi|Android/i.test(navigator.userAgent);

  const scrollToSection = (e) => {
    e.preventDefault();

    if (isMobileDevice || isScrolling) {
      // Disable smooth scrolling for mobile devices
      window.location.href = to;
      return;
    }

    const section = document.querySelector(to);

    if (section) {
      setIsScrolling(true);

      // Calculate the scroll amount based on the section's position
      const scrollAmount = section.getBoundingClientRect().top;

      // Scroll smoothly by a specified amount (adjust as needed)
      window.scrollBy({
        top: scrollAmount,
        behavior: "smooth",
      });

      // Set a timeout to reset the scrolling state after the animation completes
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000); // Adjust the delay as needed to match the scroll animation duration
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
      href={to}
      onClick={scrollToSection}
    >
      {children}
    </a>
  );
}

export default ScrollLink;
