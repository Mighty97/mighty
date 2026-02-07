export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24">
      <div className="max-w-5xl text-center space-y-6">
        
        {/* Intro */}
        <p className="text-sm uppercase tracking-widest opacity-70">
          Software Developer
        </p>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Hi, I'm <span className="">Mighty</span>
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto opacity-80">
          I build modern, responsive web applications using React,
          Tailwind and modern frontend tools. Passionate about
          clean UI and real-world problem solving.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 pt-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl border font-medium"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border font-medium"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}