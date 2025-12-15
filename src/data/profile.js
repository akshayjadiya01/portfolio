export const profiles = {
  dataAnalyst: {
    role: "Data Analyst",
    tagline: "Turning raw data into actionable insights",
    about: `
      I specialize in data analysis, visualization, and storytelling.
      I work with large datasets to uncover trends, patterns, and
      business insights using Python and SQL.
    `,
    skills: {
      Languages: ["Python", "SQL", "R"],
      Tools: ["Pandas", "NumPy", "Power BI", "Tableau", "Excel"],
      Analytics: ["EDA", "Dashboards", "Statistics", "A/B Testing"]
    },
    projects: ["sales-analysis", "customer-segmentation"],
  },

  mlEngineer: {
    role: "Machine Learning Engineer",
    tagline: "Building intelligent systems with data & models",
    about: `
      I design, train, and deploy machine learning models with a focus
      on performance, scalability, and real-world impact.
    `,
    skills: {
      ML: ["Scikit-learn", "TensorFlow", "PyTorch", "XGBoost"],
      Data: ["Pandas", "NumPy"],
      Deployment: ["FastAPI", "Docker", "Streamlit"]
    },
    projects: ["crop-disease", "fraud-detection"],
  },

  pythonDeveloper: {
    role: "Python Developer",
    tagline: "Developing scalable and efficient Python applications",
    about: `
      I build backend systems, automation tools, and APIs using Python,
      focusing on clean architecture and performance.
    `,
    skills: {
      Core: ["Python", "OOP", "Asyncio"],
      Backend: ["FastAPI", "Flask"],
      Tools: ["Git", "Docker", "Celery"]
    },
    projects: ["automation-tool", "api-service"],
  }
};
