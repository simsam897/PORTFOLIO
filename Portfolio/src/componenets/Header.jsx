import React from "react";
import { useState } from "react";
import { Menu, X } from 'lucide-react';
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div className=" sticky b-2 bg-green-400 flex justify-around px-4 py-2 gap-16 w-full overflow-autp">
        <div className="ml-16">
          <div className="font-bold font-weight-500 text-black border-2 p-1 rounded-md border-black "><h1>SS</h1></div>
        </div>
        <nav>
          <ul className="hidden mobile-menu:flex items-center gap-6 mr-20  ">
            <li><a href="/" className="hover:text-blue-600 text-black font-semibold">Home</a></li>
            <li><a href="#projects" className="hover:text-blue-600 text-black font-semibold ">Projects</a></li>
            <li><a href="#projects" className="hover:text-blue-600 text-black font-semibold ">Education</a></li>
            <li><a href="#contact" className="hover:text-blue-600 text-black font-semibold ">Contact</a></li>
          </ul>


        </nav>



        <div className="mobile-menu:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 mobile-menu:hidden">
            <a
              href="/"
              className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 text-black font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#projects"
              className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 text-black font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#projects"
              className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 text-black font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Education
            </a >
            <a
              href="#contact"
              className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 text-black font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        )}


      </div >
    </>
  );
};

