export  function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 max-w-7xl mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-12 items-start">

        {/* Left Side */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">
            Let's Work Together
          </h2>

          <p className="opacity-80 max-w-md">
            I'm open to internships, junior developer roles,
            collaborations and exciting project opportunities.
            Feel free to reach out — I'd love to connect.
          </p>

          <div className="space-y-3 pt-4">
            <p><strong>Email:</strong> your@email.com</p>
            <p><strong>GitHub:</strong> github.com/yourname</p>
            <p><strong>LinkedIn:</strong> linkedin.com/in/yourname</p>
          </div>
        </div>

        {/* Right Side - Form */}
        <form className="space-y-4 border rounded-2xl p-6 shadow-sm">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg px-4 py-3"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded-lg px-4 py-3"
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full border rounded-lg px-4 py-3"
          />

          <button
            type="submit"
            className="w-full border rounded-lg py-3 font-medium hover:opacity-80 transition"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}