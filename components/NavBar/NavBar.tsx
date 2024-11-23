import React from "react";

const NavBar: React.FC = () => {
  return (
    <nav
      className="fixed top-0 left-0 w-full bg-[#121212] shadow-md z-50 h-16 flex items-center justify-between px-8"
    >
      {/* Contenu principal */}
      <div className="flex items-center justify-between w-full">
        {/* Logo/Nom à gauche */}
        <a
          href="#hero"
          className="text-xl font-bold text-white hover:text-purple-300 transition"
        >
          Daveena
        </a>

        {/* Liens au centre */}
        <div className="relative">
          <div className="bg-gradient-to-r from-purple-800 to-purple-500 rounded-full px-6 py-2 flex items-center shadow-md">
            <a
              href="#about"
              className="text-white mx-4 hover:text-purple-300 transition"
            >
              About Me
            </a>
            <a
              href="#skills"
              className="text-white mx-4 hover:text-purple-300 transition"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-white mx-4 hover:text-purple-300 transition"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-white mx-4 hover:text-purple-300 transition"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Icônes sociales à droite */}
        <div className="flex space-x-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-300 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.262.82-.583v-2.17c-3.338.727-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.305 3.493.997.106-.774.418-1.306.762-1.606-2.665-.302-5.467-1.333-5.467-5.93 0-1.31.468-2.383 1.236-3.222-.123-.303-.535-1.518.117-3.163 0 0 1.008-.322 3.3 1.23a11.57 11.57 0 013.005-.404c1.02.004 2.048.138 3.004.404 2.29-1.552 3.296-1.23 3.296-1.23.654 1.645.242 2.86.12 3.163.77.84 1.236 1.913 1.236 3.222 0 4.607-2.807 5.625-5.478 5.922.43.37.814 1.103.814 2.22v3.293c0 .32.218.698.824.582C20.565 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-300 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.271c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.271h-3v-5.607c0-1.337-.028-3.063-1.867-3.063-1.868 0-2.157 1.46-2.157 2.971v5.699h-3v-11h2.886v1.507h.041c.402-.764 1.382-1.569 2.847-1.569 3.045 0 3.607 2.005 3.607 4.614v6.448z" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
