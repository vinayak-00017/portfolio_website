import React, { useState } from "react";
import { navLinks } from "../constants/index.js";

const NavItems = () => {
  return (
    <ul className={"nav-ul"}>
      {navLinks.map(({ id, href, name }) => (
        <li key={id} className={"nav-li"}>
          <a href={href} className={"nav-li_a"} onClick={() => {}}>
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  return (
    <header className={"fixed  inset-x-0 top-0 z-50 bg-black/90"}>
      <div className={"mx-auto max-w-7xl"}>
        <div
          className={"c-space mx-auto flex items-center justify-between py-5"}
        >
          <a
            href={"/"}
            className={
              "text-xl font-bold text-neutral-400 transition-colors hover:text-white"
            }
          >
            Vinayak
          </a>
          <button
            onClick={toggleMenu}
            className={
              "flex text-neutral-400 hover:text-white focus:outline-none sm:hidden"
            }
            aria-label="Toggle menu"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt={"toggle"}
              className={"size-6"}
            />
          </button>
          <nav className={"hidden sm:flex"}>
            <NavItems />
          </nav>
        </div>
      </div>
      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className={"p-5"}>
          <NavItems />
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
