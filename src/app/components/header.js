import ScrollLink from "../ScrollLink";

function Header() {
  return (
    <nav className="flex items-center justify-between sticky top-0 flex-wrap bg-white py-6 px-11">
      <div className="flex items-center flex-shrink-0 text-black mr-6">
        <span className="font-semibold text-xl tracking-tight">Bernhard</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-black hover:border-black">
          {/* Your button content */}
        </button>
      </div>
      <div className="w-full block flex-grow justify-end lg:flex lg:items-center lg:w-auto">
        <ScrollLink to="#home">Home</ScrollLink>
        <ScrollLink to="#about">About</ScrollLink>
        <ScrollLink to="#projects">Projects</ScrollLink>
        <ScrollLink to="#contact">Contact</ScrollLink>
      </div>
    </nav>
  );
}

export default Header;
