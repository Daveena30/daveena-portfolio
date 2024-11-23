import React from "react";
import Image from "next/image";
import { SparklesIcon } from "@heroicons/react/24/solid";


const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="h-screen bg-gradient-to-r from-purple-700 via-purple-500 to-purple-900 mt-16 flex items-center justify-between px-6 sm:px-16 relative"
    >
      {/* Contenu du texte */}
      <div className="max-w-xl space-y-6">
        {/* Barre avec nom */}
        <div className="inline-flex items-center px-6 py-3 bg-purple-900/50 text-white rounded-full shadow-lg">
          <SparklesIcon className="h-5 w-5 text-purple-300 mr-3" />
          <span className="font-semibold text-lg">
            Daveena Seeneevassen - Frontend Developer
          </span>
        </div>

        {/* Titre principal */}
        <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight fade-in">
          Providing <span className="text-gradient">the best</span> project experience
        </h1>

        {/* Bouton */}
        <a
          href="#projects"
          className="mt-4 inline-block px-8 py-3 bg-purple-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-purple-700 transition"
        >
          See My Work
        </a>
      </div>

      {/* Image à droite */}
      <div className="hidden lg:block absolute right-16 top-1/2 transform -translate-y-1/2">
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
