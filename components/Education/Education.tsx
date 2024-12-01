import React from "react";
import Image from "next/image";

const Education = () => {
  return (
    <section
      id="education"
      className="bg-gradient-to-br from-[#1E152A] via-[#2B1A40] to-[#6A1B9A] py-16 text-white"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Education</h2>
      </div>

      {/* Education Card */}
      <div className="flex justify-center">
        <div className="bg-gradient-to-br from-[#2B1A40] to-[#6A1B9A] p-8 rounded-lg shadow-xl text-center max-w-2xl">
          {/* Image */}
          <div className="mb-6">
            <div className="relative w-[100px] h-[100px] mx-auto rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/logo openclassroom.webp"
                alt="OpenClassrooms Logo"
                layout="fill"
                objectFit="cover" // L'image remplira entièrement le carré
              />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-semibold text-white mb-4">
            Intégrateur Web
          </h3>

          {/* Details */}
          <p className="text-gray-200 mb-6 leading-relaxed">
            Completed in 2024 with a diploma from OpenClassrooms, focusing on
            front-end web development, including HTML, CSS, JavaScript, and
            React. The course emphasized dynamic and responsive web design.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-purple-500 rounded-full text-semibold text-foreground/70 shadow-md">
              HTML
            </span>
            <span className="px-4 py-2 bg-purple-500 rounded-full text-semibold text-foreground/70 shadow-md">
              CSS
            </span>
            <span className="px-4 py-2 bg-purple-500 rounded-full text-semibold text-foreground/70 shadow-md">
              SASS
            </span>
            <span className="px-4 py-2 bg-purple-500 rounded-full text-semibold text-foreground/70 shadow-md">
              JavaScript
            </span>
            <span className="px-4 py-2 bg-purple-500 rounded-full text-semibold text-foreground/70 shadow-md">
              React
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
