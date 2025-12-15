import p1 from "../assets/project1.png";
import p2 from "../assets/project2.png";
import p3 from "../assets/project3.png";

const projects = [
  {
    title: "Fraud Detection Analytics Dashboard",
    description:
      "An interactive analytics dashboard that analyzes transaction data to detect fraudulent activity using machine learning models and interpretable insights.",
    result:
      "Achieved high fraud recall on highly imbalanced transaction data while maintaining model interpretability.",
    focus: "Machine Learning · Analytics",
    tech: ["Python", "XGBoost", "EDA", "SQLite", "Streamlit"],
    image: p1,
    code: "https://github.com/akshayjadiya01/fraud-detection-dashboard",
    demo: "#",
  },

  {
    title: "Customer Segmentation Application",
    description:
      "A data analytics application that segments customers using clustering techniques to identify behavioral patterns and support targeted decision-making.",
    result:
      "Identified distinct customer segments that revealed meaningful behavioral patterns for targeted decision-making.",
    focus: "Data Analysis · Unsupervised ML",
    tech: ["Python", "KMeans", "EDA", "Streamlit"],
    image: p2,
    code: "https://github.com/akshayjadiya01/customer-segmentation-app",
    demo: "#",
  },
  {
    title: "Sales Forecasting System",
    description:
      "A forecasting system that analyzes historical sales data to predict future demand and support planning and business strategy.",
    result:
      "Improved demand forecasting accuracy compared to baseline models using historical sales trends.",
    focus: "Time Series · Predictive Analytics",
    tech: ["Python", "Regression", "Time Series", "Pandas"],
    image: p3,
    code: "https://github.com/akshayjadiya01/sales-forecasting-app",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-3 gradient-text">
            Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Selected projects demonstrating my work in data analysis,
            machine learning, and data-driven decision support.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                glass rounded-2xl overflow-hidden
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-xl
              "
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col h-full">
                <span className="text-xs text-cyan-400 mb-2 uppercase tracking-wide">
                  {project.focus}
                </span>

                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-2">
                  {project.description}
                </p>

                <p className="text-sm text-cyan-400 mb-4">
                  {project.result}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full border border-cyan-400/50 text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-auto flex gap-4">
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex-1 text-center py-2 rounded-lg
                      border border-cyan-400 text-cyan-400
                      hover:bg-cyan-400 hover:text-black transition
                    "
                  >
                    View Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex-1 text-center py-2 rounded-lg
                      bg-cyan-500 text-black font-semibold
                      hover:bg-cyan-400 transition
                    "
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
