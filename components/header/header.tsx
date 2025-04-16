"use client";
import Link from "next/link";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  function handleToggleMenu() {
    setShowMenu((state) => {
      return !state;
    });
  }

  return (
    <header className="flex justify-end z-40 items-center px-16 max-md:px-2 py-2 fixed top-0 w-full b-[var(--theme-color-background)] bg-[#0002] backdrop-blur-2xl">
      <nav
        className={`flex gap-6 z-50 ${
          showMenu ? "" : "max-md:hidden"
        } max-md:absolute max-md:flex-col max-md:-bottom-1 max-md:right-1 max-md:translate-y-full  max-md:gap-4 max-md:bg-inherit max-md:backdrop-blur-2xl max-md:rounded`}
      >
        <Link className="max-md:px-2" href="#home">
          Home
        </Link>
        <Link className="max-md:px-2" href="#about">
          About
        </Link>
        <Link className="max-md:px-2" href="#projects">
          Projects
        </Link>
        <Link className="max-md:px-2" href="#contact">
          Contact
        </Link>
      </nav>
      <button
        onClick={handleToggleMenu}
        className="hidden max-md:block text-xl"
      >
        <IoMenu />
      </button>
    </header>
  );
};

export default Header;
