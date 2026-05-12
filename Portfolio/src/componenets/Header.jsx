{
  isMenuOpen && (
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
        className="block px-4 py-2 hover:bg-gray-100 hover:text-[#001E2B] text-white font-semibold"
      >
        Contact
      </a>

    </div>
  )
}