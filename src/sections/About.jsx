export function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 max-w-7xl mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side - Image */}
        <div className="flex justify-center">
          <div className="w-72 h-72 rounded-2xl border overflow-hidden">
            <img
              src="/images/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="space-y-6">

          <h2 className="text-4xl font-bold">
            About Me
          </h2>

          <p className="opacity-80">
            I'm Mighty, a software developer with a background in
            Mathematics (Numerical Analysis) and a passion for
            building modern, responsive web applications.
            I enjoy transforming ideas into clean, functional
            user experiences using React and modern frontend tools.
          </p>

          <p className="opacity-80">
            Currently improving my software development skills
            through real-world projects and continuous learning.
            I focus on writing clean code, building responsive
            interfaces and solving practical problems.
          </p>

          {/* Highlight Cards */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="border rounded-xl p-4">
              <h3 className="font-semibold">🎓 Education</h3>
              <p className="text-sm opacity-70">
                MSc Mathematics – Numerical Analysis
              </p>
            </div>

            <div className="border rounded-xl p-4">
              <h3 className="font-semibold">💻 Focus</h3>
              <p className="text-sm opacity-70">
                Frontend Development & UI
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}