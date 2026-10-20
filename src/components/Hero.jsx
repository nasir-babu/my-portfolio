import { useState, useEffect } from "react";
import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/projectsData";
import myPhoto from "../assets/my-photo.jpg";

export const Hero = () => {
  const ArrowRight = Icons.ArrowRight || Icons.ChevronRight;
  const Download = Icons.Download || Icons.FileText;

  // Exact Tech-focused roles
  const roles = [
    "Full-Stack Web Developer",
    "Next.js & TypeScript Specialist",
    "Node.js, Express & Prisma Engineer",
    "PostgreSQL, Redis & MongoDB Developer",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(110);

  useEffect(() => {
    const fullText = roles[currentRoleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
          setTypingSpeed(70);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(110);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, roles, typingSpeed]);

  // Core Tech Stack
  const coreTechs = [
    "Next.js",
    "TypeScript",
    "React",
    "Node.js",
    "Prisma",
    "PostgreSQL",
    "Redis",
    "Tailwind CSS",
  ];

  return (
    <section
      id="about"
      className="relative min-h-[calc(100vh-80px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white transition-colors duration-300"
    >
      {/* 1. Animated Radial Glow Effect */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 dark:bg-purple-600/15 rounded-full blur-[140px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none"></div>

      {/* 2. Moving Geometric Constellation Mesh SVG (Right Side) */}
      <motion.svg
        animate={{
          y: [0, -15, 0],
          rotate: [0, 1.5, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-0 top-0 w-full max-w-xl h-full opacity-20 pointer-events-none hidden md:block"
        viewBox="0 0 600 600"
        fill="none"
        stroke="currentColor"
      >
        <g strokeWidth="1" stroke="#0284c7">
          <line x1="300" y1="50" x2="450" y2="120" />
          <line x1="450" y1="120" x2="550" y2="80" />
          <line x1="450" y1="120" x2="400" y2="250" />
          <line x1="400" y1="250" x2="520" y2="220" />
          <line x1="520" y1="220" x2="580" y2="350" />
          <line x1="400" y1="250" x2="320" y2="380" />
          <line x1="320" y1="380" x2="480" y2="420" />
          <line x1="480" y1="420" x2="550" y2="520" />
          <line x1="300" y1="50" x2="220" y2="180" />
          <line x1="220" y1="180" x2="320" y2="380" />
        </g>
        <g fill="#0891b2">
          <circle cx="300" cy="50" r="4" />
          <circle cx="450" cy="120" r="5" />
          <circle cx="550" cy="80" r="3" />
          <circle cx="400" cy="250" r="4" />
          <circle cx="520" cy="220" r="4" />
          <circle cx="580" cy="350" r="5" />
          <circle cx="320" cy="380" r="4" />
          <circle cx="480" cy="420" r="5" />
          <circle cx="550" cy="520" r="3" />
          <circle cx="220" cy="180" r="4" />
        </g>
      </motion.svg>

      {/* 3. Moving Circuit Board Tracks (Left Side) */}
      <motion.svg
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-0 bottom-0 w-full max-w-lg h-full opacity-15 pointer-events-none hidden md:block"
        viewBox="0 0 500 500"
        fill="none"
        stroke="#9333ea"
        strokeWidth="1.5"
      >
        <path d="M 0 100 L 120 100 L 180 160 L 300 160" />
        <path d="M 0 250 L 80 250 L 140 310 L 250 310" />
        <path d="M 0 400 L 150 400 L 220 330 L 350 330" />
        <circle cx="300" cy="160" r="4" fill="#9333ea" />
        <circle cx="250" cy="310" r="4" fill="#9333ea" />
        <circle cx="350" cy="330" r="4" fill="#9333ea" />
      </motion.svg>

      {/* 4. Floating Animated Tech Code Symbols */}
      <motion.div
        animate={{ y: [0, -18, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-16 left-12 md:left-24 font-mono text-2xl font-bold text-purple-600/40 dark:text-purple-400/50 pointer-events-none"
      >
        {"{ }"}
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-28 left-1/2 font-mono text-3xl font-bold text-cyan-600/40 dark:text-cyan-400/50 pointer-events-none"
      >
        {"</>"}
      </motion.div>

      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-24 left-1/3 font-mono text-2xl font-bold text-indigo-600/40 dark:text-indigo-400/50 pointer-events-none"
      >
        {">_"}
      </motion.div>

      <motion.div
        animate={{ y: [0, 16, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute top-1/3 right-16 font-mono text-xl font-bold text-pink-600/40 dark:text-pink-400/50 pointer-events-none hidden md:block"
      >
        {">{}"}
      </motion.div>

      {/* Content */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 space-y-6 text-center lg:text-left"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900/90 border border-purple-300 dark:border-purple-500/30 shadow-md shadow-purple-500/10">
            <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-ping"></span>
            <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
              Available for Opportunities
            </span>
          </div>

          {/* Main Title */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-600 via-purple-600 to-indigo-600 dark:from-cyan-400 dark:via-purple-300 dark:to-indigo-400 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-cyan-600 dark:text-cyan-400 tracking-wide min-h-[38px] flex items-center justify-center lg:justify-start">
              <span>{currentText}</span>
              <span className="animate-pulse text-slate-950 dark:text-white ml-1 font-bold">|</span>
            </p>
          </div>

          {/* Bio Description */}
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
            Specialized in engineering robust JavaScript/TypeScript full-stack applications. I build high-performance web systems using{" "}
            <span className="text-cyan-600 dark:text-cyan-300 font-semibold">
              Next.js, Node.js, Prisma, PostgreSQL
            </span>
            , and modern UI architectures.
          </p>

          {/* Core Tech Stack Badges */}
          <div className="pt-1">
            <p className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-2.5">
              Core Tech Stack:
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5">
              {coreTechs.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-white dark:bg-slate-900 text-cyan-700 dark:text-cyan-300 border border-cyan-400/60 dark:border-cyan-500/40 shadow-sm dark:shadow-[0_0_13px_rgba(6,182,212,0.25)] hover:shadow-[0_0_18px_rgba(6,182,212,0.6)] hover:border-cyan-500 dark:hover:border-cyan-400 hover:text-slate-900 dark:hover:text-white transition-all cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <a
              href="#projects"
              className="relative p-[1.55px] rounded-full overflow-hidden group inline-block"
            >
              <div className="absolute inset-[-100%] animate-border-beam bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_200deg,#0284c7_300deg,#9333ea_360deg)] dark:bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_200deg,#06b6d4_300deg,#c084fc_360deg)]"></div>
              <span className="relative px-8 py-3.5 rounded-full text-base font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 shadow-lg shadow-cyan-400/25 transition-all flex items-center space-x-2">
                <span>Explore Projects</span>
                {ArrowRight && <ArrowRight size={18} />}
              </span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-[1.55px] rounded-full overflow-hidden group inline-block"
            >
              <div className="absolute inset-[-100%] animate-border-beam bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_200deg,#0284c7_300deg,#9333ea_360deg)] dark:bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_200deg,#06b6d4_300deg,#c084fc_360deg)]"></div>
              <span className="relative px-8 py-3.5 rounded-full text-base font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 shadow-lg transition-all flex items-center space-x-2 border border-slate-200 dark:border-none">
                {Download && <Download size={18} className="text-cyan-600 dark:text-cyan-400" />}
                <span>Download Resume</span>
              </span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center lg:justify-start space-x-4 pt-2">
            {[
              { href: personalInfo.github, label: "GitHub Profile", icon: <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg> },
              { href: personalInfo.linkedin, label: "LinkedIn Profile", icon: <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.57 1.57 0 1 0 0 3.14 1.57 1.57 0 0 0 0-3.14z" /></svg> },
              { href: `mailto:${personalInfo.email}`, label: "Send Email", icon: <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
              { href: `https://wa.me/${personalInfo.phone?.replace(/[^0-9]/g, "")}`, label: "WhatsApp", icon: <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" /></svg> },
            ].map((social, idx) => (
              <div key={idx} className="relative group shadow-md shadow-cyan-500/10">
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/40 transition-all flex items-center justify-center shadow-md"
                >
                  {social.icon}
                </a>
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-cyan-400 text-xs px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-slate-700 shadow-lg">
                  {social.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Profile Card with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative w-80 h-96 sm:w-96 sm:h-[420px] p-[2px] rounded-3xl overflow-hidden group">
            <div className="absolute inset-[-100%] animate-border-beam bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_200deg,#0284c7_300deg,#9333ea_360deg)] dark:bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_200deg,#06b6d4_300deg,#c084fc_360deg)]"></div>

            <div className="relative w-full h-full rounded-[23px] bg-white dark:bg-slate-900/95 p-6 shadow-2xl flex flex-col items-center justify-center text-center backdrop-blur-md border border-slate-200 dark:border-none">
              <div className="w-56 h-64 sm:w-64 sm:h-72 rounded-2xl bg-gradient-to-tr from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 border border-cyan-400/40 dark:border-cyan-500/30 shadow-inner mb-3 overflow-hidden group">
                <img
                  src={myPhoto}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-wide">
                Full-Stack Web Developer
              </h3>
              <p className="text-sm text-cyan-600 dark:text-cyan-400 font-mono mt-0.5 font-medium">
                Next.js & MERN Architecture
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};