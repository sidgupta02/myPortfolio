import React, { useEffect, useState } from "react";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setShowNavbar(false); // scrolling down
    } else {
      setShowNavbar(true); // scrolling up
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-1/2 w-1/2 -translate-x-1/2 bg-[#0A0F1C] z-50 text-white transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-evenly place-content-evenly space-x-8 py-4 px-6">
        <a href="#home" className="hover:text-green-400 font-bold text-lg">
          HOME
        </a>
        <a href="#skills" className="hover:text-green-400 font-bold text-lg">
          SKILLS
        </a>
        <a href="#projects" className="hover:text-green-400 font-bold text-lg">
          PROJECTS
        </a>
        <a href="#contact" className="hover:text-green-400 font-bold text-lg">
          CONTACT
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
