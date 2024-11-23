const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-purple-700 text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Compétences</h2>
      <div className="flex justify-center flex-wrap gap-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-purple-600 px-4 py-2 rounded-full shadow text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
