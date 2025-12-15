const skills = [
  {
    category: "Data Analyst",
    items: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 85 },
      { name: "Exploratory Data Analysis (EDA)", level: 90 },
      { name: "Pandas & NumPy", level: 88 },
      { name: "Matplotlib & Seaborn", level: 85 },
      { name: "Power BI", level: 82 },
      { name: "Tableau", level: 78 },
    ],
  },
  {
    category: "Machine Learning Engineer",
    items: [
      { name: "Supervised Learning", level: 85 },
      { name: "Unsupervised Learning", level: 80 },
      { name: "XGBoost", level: 82 },
      { name: "Random Forest", level: 80 },
      { name: "Feature Engineering", level: 80 },
      { name: "Model Evaluation & Metrics", level: 85 },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Jupyter Notebook", level: 90 },
      { name: "Anaconda", level: 85 },
      { name: "Google Colab", level: 88 },
      { name: "Streamlit", level: 85 },
      { name: "SQLite", level: 80 },
      { name: "Git & GitHub", level: 85 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-black/30">
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
          Skills & Expertise
        </h2>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {skills.map((group, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 glow transition-all duration-300 hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold mb-6 text-cyan-400">
                {group.category}
              </h3>

              <div className="space-y-5">
                {group.items.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
