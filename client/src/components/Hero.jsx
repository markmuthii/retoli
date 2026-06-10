import { Link } from "react-router";

const Hero = () => {
  return (
    <section
      className="bg-gradient-to-b from-slate-900 to-slate-950 text-white py-16"
      aria-labelledby="hero-title"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1
          id="hero-title"
          className="text-5xl font-extrabold tracking-tight mb-2"
        >
          Retoli
        </h1>
        <p className="text-lg mb-6 text-slate-200">
          Turn PDFs into audiobooks — listen anywhere, anytime.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <Link
            to="/register"
            className="inline-block px-6 py-3 rounded-lg bg-cyan-400 text-slate-900 font-semibold hover:bg-cyan-500 transition"
          >
            Get Started — Register
          </Link>

          <Link
            to="/login"
            className="inline-block px-6 py-3 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/5 transition"
          >
            Sign In
          </Link>
        </div>

        <p className="text-sm text-slate-300">
          Upload PDF, choose voice &amp; speed, then stream or download your
          audio.
        </p>
      </div>
    </section>
  );
};

export { Hero };
