import { personalInfo } from "../data/projectsData";
import { ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/80 pt-16 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden z-10">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-cyan-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Column 1: Brand & Bio (4 Columns) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-2xl font-extrabold text-white tracking-wide">
              {personalInfo.name.split(" ")[0]}{" "}
              <span className="text-cyan-400">
                {personalInfo.name.split(" ").slice(1).join(" ")}
              </span>
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Passionate Full-Stack Developer specializing in React, Node.js,
              and modern web applications. Focused on delivering
              high-performance, user-centric digital experiences.
            </p>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-medium text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>Available for Freelance & Full-time</span>
            </div>
          </div>

          {/* Column 2: Quick Links (2 Columns) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a
                  href="#about"
                  className="hover:text-cyan-400 transition-colors"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Skills & Tech
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info (3 Columns) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center space-x-2">
                <span className="text-cyan-400 font-medium">Email:</span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-cyan-400 transition-colors truncate"
                >
                  {personalInfo.email}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-cyan-400 font-medium">Phone:</span>
                <span>{personalInfo.phone}</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-cyan-400 font-medium">Location:</span>
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media Links and  Back To Top / CTA (3 Columns) */}
          <div className="lg:col-span-3 space-y-4 flex flex-col justify-between">
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-2">
                Let's Connect
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Ready to take your digital product to the next level? Feel free
                to reach out anytime.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start space-x-4 pt-2 ">
              <div className="relative group shadow-lg shadow-cyan-500/20">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all flex items-center justify-center shadow-lg"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-cyan-400 text-xs px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-slate-700 shadow-lg">
                  GitHub Profile
                </span>
              </div>

              <div className="relative group shadow-lg shadow-cyan-500/20">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all flex items-center justify-center shadow-lg"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.57 1.57 0 1 0 0 3.14 1.57 1.57 0 0 0 0-3.14z" />
                  </svg>
                </a>
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-cyan-400 text-xs px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-slate-700 shadow-lg">
                  LinkedIn Profile
                </span>
              </div>

              <div className="relative group shadow-lg shadow-cyan-500/20">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all flex items-center justify-center shadow-lg"
                >
                  <svg
                    className="w-5 h-5 fill-none stroke-current stroke-2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-cyan-400 text-xs px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-slate-700 shadow-lg">
                  Send Email
                </span>
              </div>

              <div className="relative group shadow-lg shadow-cyan-500/20">
                <a
                  href={`https://wa.me/${personalInfo.phone?.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all flex items-center justify-center"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                  </svg>
                </a>
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-cyan-400 text-xs px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-slate-700 shadow-lg">
                  WhatsApp
                </span>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className=" inline-flex items-center justify-center space-x-2   px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all text-xs font-semibold shadow-lg group w-fit"
            >
              <span>Back To Top</span>
              <ArrowUp
                size={14}
                className="group-hover:-translate-y-0.5 transition-transform"
              />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-slate-300 font-medium">
              {personalInfo.name}
            </span>
            . All rights reserved.
          </p>
          <p className="flex items-center space-x-1">
            <span>Crafted with React & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
