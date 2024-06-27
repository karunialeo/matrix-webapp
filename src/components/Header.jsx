import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-blue-600 text-white p-4 shadow-md fixed w-full z-10 top-0">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="hover:text-gray-200 transition-colors">
          <h1 className="text-3xl font-bold">Matrix App</h1>
        </Link>

        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-200 transition-colors">
            Beranda
          </Link>
          <Link to="/quiz" className="hover:text-gray-200 transition-colors">
            Kuis
          </Link>
          <Link
            to="/calculator"
            className="hover:text-gray-200 transition-colors"
          >
            Kalkulator
          </Link>
        </nav>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="focus:outline-none text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-blue-600 p-4 space-y-4 animate-fadeIn">
          <Link
            to="/"
            className="block hover:text-gray-200 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Beranda
          </Link>
          <Link
            to="/quiz"
            className="block hover:text-gray-200 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Kuis
          </Link>
          <Link
            to="/calculator"
            className="block hover:text-gray-200 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Kalkulator
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
