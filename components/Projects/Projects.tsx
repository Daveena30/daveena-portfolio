const projects = [
    {
      title: "Projet 1",
      description: "Description courte du projet 1.",
      skills: ["React", "Node.js"],
      github: "#",
    },
    {
      title: "Projet 2",
      description: "Description courte du projet 2.",
      skills: ["HTML", "CSS"],
      github: "#",
    },
    {
      title: "Projet 3",
      description: "Description courte du projet 3.",
      skills: ["Next.js", "Tailwind"],
      github: "#",
    },
    {
      title: "Projet 4",
      description: "Description courte du projet 4.",
      skills: ["Python", "Django"],
      github: "#",
    },
  ];
  
  export default function Projects() {
    return (
        <section id="projects" className="h-screen bg-gray-900 text-white">
        <h2 className="text-3xl font-bold text-center mb-12">Mes projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-purple-400 mb-2">{project.title}</h3>
              <p className="text-sm text-gray-300">{project.description}</p>
              <p className="text-xs text-gray-500 mt-2">
                {project.skills.join(", ")}
              </p>
              <a
                href={project.github}
                className="block mt-4 text-purple-500 hover:underline"
              >
                Voir sur GitHub
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  