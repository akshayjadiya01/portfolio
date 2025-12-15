export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 glass rounded-full px-8 py-3 shadow-xl">
      <ul className="flex gap-8 text-sm font-medium">
        {["Home", "Projects", "Skills", "Contact"].map(item => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="hover:text-cyan-400 transition"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
