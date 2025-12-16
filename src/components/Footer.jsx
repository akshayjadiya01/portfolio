import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Akshay Jadiya. All rights reserved.
        </p>

        {/* Center */}
        <p className="text-sm text-gray-500">
          Built with <span className="text-cyan-400">React</span> &{" "}
          <span className="text-cyan-400">Tailwind CSS</span>
        </p>

        {/* Right */}
        <div className="flex gap-6">
          <a
            href="mailto:akshayjadiya15@gmail.com"
            aria-label="Email"
            className="text-gray-400 hover:text-cyan-400 transition"
          >
            <Mail size={20} />
          </a>

          <a
            href="https://github.com/akshayjadiya01"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-cyan-400 transition"
          >
            <Github size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/akshay-jadiya-88b663259/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-cyan-400 transition"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
