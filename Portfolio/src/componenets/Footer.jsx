import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#001E2B]    py-6  text-center">
      <p className="text-gray-600 dark:text-gray-400">&copy; {new Date().getFullYear()} SS. All rights reserved.</p>
      <div className="mt-4 flex justify-center gap-6">
        <a href="#" className="text-white transition">Home</a>
        <a href="www.linkedin.com/in/simranjit-singh-944705232" className="text-white transition">LinkdedIn</a>
        {/* <a href="#" className="hover:text-blue-500 transition"></a> */}
      </div>
    </footer>
  );
}
