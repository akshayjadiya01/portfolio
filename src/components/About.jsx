export default function About() {
  return (
    <section id="about" className="pt-16 pb-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* SECTION HEADER */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            About Me
          </h2>
          <p className="text-gray-500 text-sm uppercase tracking-widest">
            From data to decisions
          </p>
        </div>

        {/* PERSONAL INTRO */}
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed mb-10">
          Hi, I’m{" "}
          <span className="text-cyan-400 font-medium">
            Akshay Jadiya
          </span>
          , a <span className="text-cyan-400">Data Analyst</span> and{" "}
          <span className="text-cyan-400">Machine Learning Engineer</span>.
          I work with data to uncover meaningful insights and build models that
          support real-world decision-making.
        </p>

        {/* PHILOSOPHY */}
        <div className="border-l-2 border-cyan-400/30 pl-6 max-w-3xl mb-16">
          <p className="text-gray-400 leading-relaxed">
            My approach emphasizes understanding data deeply before modeling.
            I focus on clarity, validation, and interpretability so results are
            not just accurate, but trustworthy.
          </p>
        </div>

        {/* THINKING FRAMEWORK — EYE-CATCHING UX */}
        <div className="grid md:grid-cols-4 gap-6">
          {[
            "Explore data quality & structure",
            "Analyze patterns & drivers",
            "Build & validate ML models",
            "Translate insights into decisions",
          ].map((text, i) => (
            <div
              key={i}
              className="
                group relative rounded-xl p-6 cursor-pointer
                bg-white/5 backdrop-blur
                transition-all duration-300 ease-out
                hover:-translate-y-3
                hover:shadow-2xl hover:shadow-cyan-500/30
              "
            >
              {/* Gradient glow on hover */}
              <div
                className="
                  absolute inset-0 rounded-xl
                  bg-gradient-to-r from-cyan-400/20 to-blue-500/20
                  opacity-0 group-hover:opacity-100
                  blur-xl transition
                "
              ></div>

              {/* Content */}
              <div className="relative z-10">
                <span className="text-cyan-400 font-bold text-sm">
                  0{i + 1}
                </span>

                <p className="mt-3 text-sm text-gray-400 group-hover:text-gray-200 transition">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
