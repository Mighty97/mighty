export default function ProjectCard({ project }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden shadow-lg border hover:-translate-y-2 transition duration-300">
      
      {/* Project Image */}
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h3 className="text-xl font-semibold">{project.title}</h3>

        <p className="text-sm opacity-80">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tech?.map((tech, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 rounded-lg border"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-4">
          <a
            href={project.github}
            target="_blank"
            className="text-sm font-medium underline"
          >
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            className="text-sm font-medium underline"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}