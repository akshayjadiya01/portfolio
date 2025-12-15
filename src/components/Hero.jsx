import { useEffect, useState } from "react";

export default function Hero() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById("home");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const progress = Math.min(
        Math.max((window.innerHeight - rect.top) / window.innerHeight, 0),
        1
      );

      setActiveStep(Math.floor(progress * 4));
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT — IDENTITY & VALUE */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Data Analyst &{" "}
            <span className="gradient-text">ML Engineer</span>
          </h1>

          <p className="mt-6 text-xl text-gray-400 max-w-xl">
            I analyze data to uncover insights and build machine learning models
            that support real-world, data-driven decisions.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            {[
              "Exploratory Data Analysis",
              "Predictive Modeling",
              "Decision-Oriented Insights",
            ].map((item) => (
              <span
                key={item}
                className="
                  px-5 py-2 rounded-full border border-cyan-400 text-cyan-400 text-sm
                  transition-all duration-300 ease-out
                  hover:bg-cyan-400 hover:text-black
                  hover:-translate-y-1
                  hover:shadow-lg hover:shadow-cyan-400/30
                  cursor-pointer
                "
              >
                {item}
              </span>

            ))}
          </div>
        </div>

        {/* RIGHT — INTELLIGENT PIPELINE VISUAL */}
        <div className="hidden md:flex items-center justify-center relative">

          {/* ambient depth */}
          <div className="absolute w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl"></div>

          <svg
            width="420"
            height="300"
            viewBox="0 0 420 300"
            className="opacity-95"
          >
            {/* base line */}
            <line
              x1="60"
              y1="150"
              x2="360"
              y2="150"
              stroke="#334155"
              strokeWidth="2"
            />

            <Node
              x={60}
              label="Data"
              sub="CSV · SQL · APIs"
              active={activeStep >= 1}
              tooltip="Collecting, cleaning, validating raw data"
            />

            <Node
              x={160}
              label="Analysis"
              sub="EDA · Patterns"
              active={activeStep >= 2}
              tooltip="Understanding distributions and relationships"
            />

            <Node
              x={260}
              label="Model"
              sub="ML · Metrics"
              active={activeStep >= 3}
              tooltip="Training, validation, and evaluation"
            />

            <Node
              x={360}
              label="Decision"
              sub="Insights · Impact"
              active={activeStep >= 4}
              tooltip="Insights that guide actions and decisions"
            />
          </svg>
        </div>

      </div>
    </section>
  );
}

/* ---------- PIPELINE NODE ---------- */

function Node({ x, label, sub, active, tooltip }) {
  return (
    <g className="group cursor-pointer">
      <circle
        cx={x}
        cy="150"
        r="18"
        fill={active ? "#22d3ee" : "#334155"}
        className="
          transition-all duration-300 ease-out
          group-hover:scale-110
          group-hover:fill-cyan-400
          group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]
        "
        style={{ transformOrigin: `${x}px 150px` }}
      >
        <title>{tooltip}</title>
      </circle>

      <text
        x={x}
        y="120"
        textAnchor="middle"
        fill="#e5e7eb"
        fontSize="13"
        className="transition group-hover:fill-cyan-400"
      >
        {label}
      </text>

      <text
        x={x}
        y="180"
        textAnchor="middle"
        fill="#94a3b8"
        fontSize="11"
        className="transition group-hover:fill-gray-300"
      >
        {sub}
      </text>
    </g>
  );
}
