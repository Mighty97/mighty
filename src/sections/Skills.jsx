const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind"]
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Vite"]
  },
  {
    title: "Learning",
    skills: ["Node.js", "APIs", "Responsive Design"]
  }
];

export function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-6 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold mb-3">
          Skills & Tech Stack
        </h2>

        <p className="opacity-70 max-w-xl mx-auto">
          Technologies and tools I use to build modern,
          responsive web applications.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="border rounded-2xl p-6 shadow-sm hover:-translate-y-2 transition"
          >
            <h3 className="text-xl font-semibold mb-4">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="text-sm border px-3 py-1 rounded-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}