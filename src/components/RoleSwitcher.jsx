export default function RoleSwitcher({ role, setRole }) {
  return (
    <div className="flex gap-4 justify-center mb-10">
      {[
        { id: "dataAnalyst", label: "Data Analyst" },
        { id: "mlEngineer", label: "ML Engineer" },
        { id: "pythonDeveloper", label: "Python Developer" },
      ].map(item => (
        <button
          key={item.id}
          onClick={() => setRole(item.id)}
          className={`px-5 py-2 rounded-full border transition
            ${
              role === item.id
                ? "bg-cyan-500 text-black"
                : "border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
            }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
