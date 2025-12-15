import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Akshay. All rights reserved.
        </p>

        {/* Center */}
        <p className="text-sm text-gray-500">
          Built with <span className="text-cyan-400">React</span> &{" "}
          <span className="text-cyan-400">TailwindCSS</span>
        </p>

        {/* Right */}
        <div className="flex gap-6">
          <a
            href="mailto:your@email.com"
            className="text-gray-400 hover:text-cyan-400 transition"
          >
            <Mail size={20} />
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition"
          >
            <Github size={20} />
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
