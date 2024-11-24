import Image from 'next/image';

const projects = [
  {
    title: "Kasa",
    description: "A modern platform for peer-to-peer apartment rentals.",
    skills: ["React", "Node.js", "JavaScript", "CSS", "React Router"],
    github: "https://github.com/Daveena30/kasa",
    image: "/kasa.webp",
  },
  {
    title: "Nina Carducci",
    description: "An elegant portfolio website for a creative artist.",
    skills: ["HTML", "CSS", "JavaScript", "SEO Optimization"],
    github: "https://github.com/Daveena30/nina-carducci",
    image: "/ninacarducci.webp",
  },
  {
    title: "ArgentBank",
    description: "A responsive banking application for managing user accounts and transactions.",
    skills: ["React", "Redux", "JavaScript", "CSS", "Swagger"],
    github: "https://github.com/Daveena30/ArgentBank",
    image: "/argentbank.webp",
  },
  {
    title: "724events",
    description: "Debugging and finalizing a one-page event management agency website",
    skills: ["JavaScript", "Chrome DevTools", "SCSS"],
    github: "https://github.com/Daveena30/724-Events/tree/main/src/containers",
    image: "/724.webp",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#1E152A] text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
      <div className="flex justify-between items-center flex-wrap gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full sm:w-[48%] lg:w-[23%] bg-[#121212] rounded-lg overflow-hidden shadow-lg transform transition hover:scale-105 hover:shadow-2xl flex flex-col"
            style={{ height: "380px" }}
          >
            {/* Image with Adjusted Height */}
            <div
              className="relative w-full"
              style={{ height: "180px", overflow: "hidden" }}
            >
              <Image
                src={project.image}
                alt={`${project.title} image`}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 w-full h-full"
              />
            </div>
            {/* Card Content */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <h3 className="text-xl font-semibold text-purple-400 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4 flex-grow">
                {project.description}
              </p>
              <p className="text-gray-400 text-xs mb-4">
                <strong>Skills:</strong> {project.skills.join(", ")}
              </p>
              {/* Centered Pill-Shaped Button */}
              <div className="flex justify-center">
                <a
                  href={project.github}
                  className="px-4 py-1.5 bg-purple-500 text-white text-xs font-medium rounded-full hover:bg-purple-600 transition"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
