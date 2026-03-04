import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-200 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <svg
              className="w-8 h-8 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span className="text-gray-800 font-bold text-lg md:text-xl">
              Ticket System
            </span>
          </div>

          {/* Menu and Button Together */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {/* Desktop Menu */}
            <div className="flex items-center space-x-1 lg:space-x-2">
              <a
                href="#"
                className="text-gray-800 hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium transition"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-800 hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium transition"
              >
                FAQ
              </a>
              <a
                href="#"
                className="text-gray-800 hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium transition"
              >
                Changing
              </a>
              <a
                href="#"
                className="text-gray-800 hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium transition"
              >
                Blog
              </a>
              <a
                href="#"
                className="text-gray-800 hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium transition"
              >
                Download
              </a>
              <a
                href="#"
                className="text-gray-800 hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium transition"
              >
                Contact
              </a>
            </div>

            {/* New Ticket Button */}
            <button className="bg-gradient-to-r from-[#422AD5] to-purple-600 text-white hover:from-[#422AD5]/80 hover:to-purple-600/80 px-4 py-2 rounded-lg font-semibold transition ml-2 shadow-md">
              + New Ticket
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-800 hover:bg-gray-300 p-2 rounded-md transition"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-300 border-t border-gray-400">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#"
                className="text-gray-800 hover:bg-gray-400 block px-3 py-2 rounded-md text-base font-medium transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-800 hover:bg-gray-400 block px-3 py-2 rounded-md text-base font-medium transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <a
                href="#"
                className="text-gray-800 hover:bg-gray-400 block px-3 py-2 rounded-md text-base font-medium transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Changing
              </a>
              <a
                href="#"
                className="text-gray-800 hover:bg-gray-400 block px-3 py-2 rounded-md text-base font-medium transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </a>
              <a
                href="#"
                className="text-gray-800 hover:bg-gray-400 block px-3 py-2 rounded-md text-base font-medium transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Download
              </a>
              <a
                href="#"
                className="text-gray-800 hover:bg-gray-400 block px-3 py-2 rounded-md text-base font-medium transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <div className="pt-2">
                <button
                  className="w-full bg-gradient-to-r from-[#422AD5] to-purple-600 text-white hover:from-[#422AD5]/80 hover:to-purple-600/80 px-4 py-2 rounded-lg font-semibold transition shadow-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  + New Ticket
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
