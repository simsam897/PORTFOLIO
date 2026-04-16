// import React from "react";
// import { useState } from "react";
// import { Menu, X } from 'lucide-react';
// export const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   return (
//     <>
//       <div className=" b-2 bg-[#00684A] flex  mobile-menu:justify-around px-2  gap-16  py-2 mobile-menu:gap-16 w-full overflow-auto  relative mx-auto ">
//         <div className="ml-16 ">
//           <div className="font-bold font-weight-500 text-black border-2 p-1 rounded-md border-black "><h1>SS</h1></div>
//         </div>
//         <nav>
//           <ul className="hidden  mobile-menu:flex items-center gap-6 mr-20  ">
//             <li><a href="/" className="hover:text-blue-600 text-black font-semibold">Home</a></li>
//             <li><a href="#projects" className="hover:text-blue-600 text-black font-semibold ">Projects</a></li>
//             <li><a href="#projects" className="hover:text-blue-600 text-black font-semibold ">Education</a></li>
//             <li><a href="#contact" className="hover:text-blue-600 text-black font-semibold ">Contact</a></li>
//           </ul>


//         </nav>



//         <div className="mobile-menu:hidden absolute z-50  ">
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="p-2 hover:bg-gray-100 rounded-lg 
//             transition-colors "
//             aria-label="Toggle menu"
//           >
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {isMenuOpen && (
//           <div className=" top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 mobile-menu:hidden ">
//             <a
//               href="/"
//               className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 text-black font-semibold"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Home
//             </a>
//             <a
//               href="#projects"
//               className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 text-black font-semibold"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Projects
//             </a>
//             <a
//               href="#projects"
//               className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 text-black font-semibold"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Education
//             </a >
//             <a
//               href="#contact"
//               className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 text-black font-semibold"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Contact
//             </a>
//           </div>
//         )}


//       </div >
//     </>
//   );
// };

import React from "react";
import { useState } from "react";
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-gradient-to-br from-[#00684A] to-green-400  flex items-center justify-between px-14 py-2  w-full relative ">
        {/* Logo - Left side */}
        <div className="flex-shrink-0  ml-14">
          <div className="font-bold font-weight-500 text-white border-2 p-1 rounded-md border-black mobile-menu:ml-16 bg-black">
            <h1>SS</h1>
          </div>
        </div>

        {/* Desktop Navigation - Hidden on mobile */}
        <nav className="hidden mobile-menu:pr-14 ml-10 mobile-menu:mr-14 mobile-menu:block">
          <ul className="flex justify-center  items-center gap-8 mr-16">
            <li><a href="/" className="hover:text-blue-600 text-black font-semibold">Home</a></li>
            <li><a href="#projects" className="hover:text-blue-600 text-black font-semibold">Projects</a></li>
            <li><a href="#projects" className="hover:text-blue-600 text-black font-semibold">Education</a></li>
            <li><a href="#contact" className="hover:text-blue-600 text-black font-semibold">Contact</a></li>
          </ul>
        </nav>

        {/* Hamburger Menu Button - Right side on mobile */}
        <div className="mobile-menu:hidden flex-shrink-0">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg py-2 z-50 mobile-menu:hidden">
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
            </a>
            <a
              href="#contact"
              className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 text-black font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </>
  );
};