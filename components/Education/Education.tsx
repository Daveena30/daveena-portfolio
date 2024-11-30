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
        <Image
          src="/logo openclassroom.webp"
          alt="OpenClassrooms Logo"
          width={100}
          height={100}
          className="mx-auto rounded-full shadow-lg"
        />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-semibold text-white mb-4">
        Intégrateur Web
      </h3>

      {/* Details */}
      <p className="text-gray-200 mb-6 leading-relaxed">
        Completed in 2024 with a diploma from OpenClassrooms, focusing on
        front-end web development, including HTML, CSS, JavaScript, and React.
        The course emphasized dynamic and responsive web design.
      </p>

      {/* Skills */}
      <div className="flex flex-wrap justify-center gap-3">
        <span className="px-4 py-2 bg-[#C49EFC]/20 rounded-full text-semibold text-indigo-400 shadow-md">
          HTML
        </span>
        <span className="px-4 py-2 bg-[#C49EFC]/20 rounded-full text-semibold text-indigo-400 shadow-md">
          CSS
        </span>
        <span className="px-4 py-2 bg-[#C49EFC]/20 rounded-full text-semibold text-indigo-400 shadow-md">
          SASS
        </span>
        <span className="px-4 py-2 bg-[#C49EFC]/20 rounded-full text-semibold text-indigo-400 shadow-md">
        JavaScript
        </span>
        <span className="px-4 py-2 bg-[#C49EFC]/20 rounded-full text-semibold text-indigo-400 shadow-md">
        React
        </span>
      </div>
    </div>
  </div>
</section>
  );
};

export default Education;
