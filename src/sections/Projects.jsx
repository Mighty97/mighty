import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export function Projects() {
  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <section
      id="projects"
      className="py-20 px-6 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="mb-14 text-center">
        <h2 className="text-4xl font-bold mb-3">
          Projects
        </h2>

        <p className="opacity-70 max-w-xl mx-auto">
          A selection of projects I've built using modern
          frontend tools and responsive design principles.
        </p>
      </div>

      {/* ⭐ Featured Project */}
      <div className="mb-16 border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <img
            src={featuredProject.image}
            alt={featuredProject.title}
            className="rounded-xl w-full h-full object-cover"
          />

          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              {featuredProject.title}
            </h3>

            <p className="opacity-80">
              {featuredProject.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {featuredProject.tech?.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs border px-3 py-1 rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 pt-3">
              <a
                href={featuredProject.github}
                target="_blank"
                className="border px-4 py-2 rounded-lg"
              >
                GitHub
              </a>

              <a
                href={featuredProject.live}
                target="_blank"
                className="border px-4 py-2 rounded-lg"
              >
                Live Demo
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* 🧩 Projects Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

    </section>
  );
}