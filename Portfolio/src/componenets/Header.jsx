import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export const Header = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-gradient-to-br from-[#00684A] to-green-400 flex items-center justify-between px-14 py-2 w-full relative border-b-2 border-[#001E2B] shadow-lg">

        {/* Logo */}
        <div className="flex-shrink-0 ml-14">
          <div className="font-bold text-white border-2 p-1 rounded-md border-black bg-black">
            <h1>SS</h1>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden mobile-menu:block ml-10 mobile-menu:mr-14">
          <ul className="flex items-center gap-8 mr-16">
            <li>
              <a href="/" className="hover:text-[#001E2B] text-white font-semibold">
                Home
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-[#001E2B] text-white font-semibold">
                Projects
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-[#001E2B] text-white font-semibold">
                Education
              </a>
            </li>
            <li
              onClick={props.scrollToContact}
              className="hover:text-[#001E2B] text-white font-semibold cursor-pointer"
            >
              Contact
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        <div className="mobile-menu:hidden flex-shrink-0">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-[#001E2B] rounded-lg shadow-lg py-4 z-50 mobile-menu:hidden">

            <a
              href="/"
              className="block px-4 py-2 hover:bg-gray-100 hover:text-[#001E2B] text-white font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>

            <a
              href="#projects"
              className="block px-4 py-2 hover:bg-gray-100 hover:text-[#001E2B] text-white font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>

            <a
              href="#projects"
              className="block px-4 py-2 hover:bg-gray-100 hover:text-[#001E2B] text-white font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Education
            </a>

            <a
              onClick={() => {
                props.scrollToContact();
                setIsMenuOpen(false);
              }}
              className="block px-4 py-2 hover:bg-gray-100 hover:text-[#001E2B] text-white font-semibold cursor-pointer"
            >
              Contact
            </a>

          </div>
        )}
      </div>
    </>
  );
};