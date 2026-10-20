import { useState } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { useTheme } from "next-themes";
import * as Icons from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const Sun = Icons.Sun || Icons.Sparkles;
  const Moon = Icons.Moon || Icons.Shield;

  return (
    <nav className="sticky top-0 left-0 w-full z-50 bg-white/80 dark:bg-[#030712]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/60 shadow-xl transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Brand (Left) */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700/60 text-cyan-600 dark:text-cyan-400 shadow-inner group-hover:border-cyan-500/50 transition-colors">
              <Code2 size={24} />
            </div>
            <span className="text-2xl font-bold tracking-wide text-slate-900 dark:text-white">
              Nasir<span className="text-cyan-600 dark:text-cyan-400">.</span>
            </span>
          </a>

          {/* Desktop Menu (Centered Links) */}
          <div className="hidden md:flex items-center space-x-10">
            <a
              href="#about"
              className="text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors text-base font-medium tracking-wide"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors text-base font-medium tracking-wide"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors text-base font-medium tracking-wide"
            >
              Skills
            </a>
            <a
              href="#experience"
              className="text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors text-base font-medium tracking-wide"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors text-base font-medium tracking-wide"
            >
              Contact
            </a>
          </div>

          {/* Right Side: Theme Toggle & Hire Me Button */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle Button */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-cyan-600 dark:text-cyan-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all shadow-md cursor-pointer"
              title="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sun size={18} className="text-amber-400" />
              ) : (
                <Moon size={18} className="text-cyan-600" />
              )}
            </button>

            {/* Hire Me Button */}
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-full text-base font-semibold text-white dark:text-slate-100 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-[#030712] dark:via-[#0b1329] dark:to-[#1e293b] border border-slate-700/50 hover:opacity-95 shadow-lg shadow-cyan-500/10 transition-all transform hover:-translate-y-0.5"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Right Controls (Theme Toggle & Menu Button) */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-cyan-600 dark:text-cyan-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all cursor-pointer"
              title="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sun size={16} className="text-amber-400" />
              ) : (
                <Moon size={16} className="text-cyan-600" />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white focus:outline-none p-2 cursor-pointer"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[#030712]/95 backdrop-blur-2xl border-b border-slate-200 dark:border-slate-800 px-6 pt-4 pb-6 space-y-4 shadow-xl">
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800/50"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800/50"
          >
            Projects
          </a>
          <a
            href="#skills"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800/50"
          >
            Skills
          </a>
          <a
            href="#experience"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800/50"
          >
            Experience
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800/50"
          >
            Contact
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block text-center w-full mt-2 px-6 py-3 rounded-xl text-base font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 shadow-lg shadow-cyan-400/20 transition-all"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
};