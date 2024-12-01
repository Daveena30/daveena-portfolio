"use client";

import React, { useState } from "react";
import GithubIcon from "../../components/icons/GithubIcon";
import LinkedinIcon from "../../components/icons/LinkedinIcon";

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-br from-[#1E152A] via-[#2B1A40] to-[#6A1B9A] shadow-md z-50 h-16 flex items-center justify-between px-6 sm:px-8">
      {/* Logo/Name on the left */}
      <a
        href="#hero"
        className="text-4xl font-bold text-white hover:text-indigo-400 transition cursive"
      >
        Daveena
      </a>

      {/* Centered Links (Desktop Only) */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 bg-purple-900 bg-opacity-60 backdrop-blur-lg rounded-full px-6 py-2 shadow-lg border border-purple-500 hover:shadow-xl transition-shadow">
        <a
          href="#about"
          className="text-white mx-4 font-semibold hover:text-indigo-400 transition whitespace-nowrap"
        >
          About Me
        </a>
        <a
          href="#skills"
          className="text-white mx-4 font-semibold hover:text-indigo-400 transition"
        >
          Skills
        </a>
        <a
          href="#projects"
          className="text-white mx-4 font-semibold hover:text-indigo-400 transition"
        >
          Projects
        </a>
        <a
          href="#education"
          className="text-white mx-4 font-semibold hover:text-indigo-400 transition"
        >
          Education
        </a>
        <a
          href="#contact"
          className="text-white mx-4 font-semibold hover:text-indigo-400 transition"
        >
          Contact
        </a>
      </div>

      {/* Right Side Icons */}
      <div className="hidden md:flex items-center space-x-4">
        {/* GitHub */}
        <a
          href="https://github.com/Daveena30"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-indigo-400 transition"
        >
          <GithubIcon className="h-6 w-6" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/daveena-seeneevassen/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-indigo-400 transition"
        >
          <LinkedinIcon className="h-6 w-6" />
        </a>
      </div>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white focus:outline-none"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 right-0 bg-[#1E152A] w-48 shadow-md rounded-lg flex flex-col py-4 space-y-2 text-center z-50">
          <a
            href="#about"
            className="text-white py-2 hover:text-indigo-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            About Me
          </a>
          <a
            href="#skills"
            className="text-white py-2 hover:text-indigo-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-white py-2 hover:text-indigo-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#education"
            className="text-white py-2 hover:text-indigo-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Education
          </a>
          <a
            href="#contact"
            className="text-white py-2 hover:text-indigo-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
