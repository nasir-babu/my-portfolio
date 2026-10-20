import { useState, useEffect, useRef } from 'react';
import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';
import { aboutData } from '../data/aboutData';

// Custom CountUp Component (No Third-Party Package Needed)
const PureCountUp = ({ value }) => {
  const numericVal = parseInt(String(value).replace(/\D/g, '')) || 0;
  const suffix = String(value).replace(/[0-9]/g, '');

  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 1800; // 1.8 seconds
          const steps = 40;
          const increment = numericVal / steps;
          const stepTime = duration / steps;

          const timer = setInterval(() => {
            start += increment;
            if (start >= numericVal) {
              setCount(numericVal);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, stepTime);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [numericVal, hasAnimated]);

  return (
    <span ref={elementRef}>
      {count}
      {suffix}
    </span>
  );
};

export const About = () => {
  const Code = Icons.Code2 || Icons.Code;
  const Cpu = Icons.Cpu || Icons.Terminal;
  const ShieldCheck = Icons.ShieldCheck || Icons.CheckCircle;
  const Award = Icons.Award || Icons.Sparkles;
  const Download = Icons.Download || Icons.FileText;
  const Flame = Icons.Flame || Icons.Zap;

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-white transition-colors duration-300">
      {/* Background Cyberpunk Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-[450px] h-[450px] bg-cyan-500/15 dark:bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-blue-600/15 dark:bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header with Scroll Animation */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 dark:border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-xs font-semibold tracking-widest uppercase">
            <Icons.UserCheck size={14} />
            <span>Developer Journey</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            About <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">Nasirullah Babu</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Architecting Scalable Web Applications with Persistence, Clean Code, & Backend Mastery.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 mx-auto rounded-full mt-3"></div>
        </motion.div>

        {/* Main Grid: Bio Story (Left) & Stats / Core Strengths (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT COLUMN: My Story & Journey (7 Cols) with Slide-In */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="p-8 rounded-3xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 backdrop-blur-md shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all pointer-events-none"></div>

              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400">
                  <Flame size={24} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    The Story of Grit & Resilience
                  </h3>
                  <span className="text-xs text-cyan-600 dark:text-cyan-400 font-medium">
                    Passion Overcomes Obstacles
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {aboutData?.bio?.map((paragraph, index) => (
                  <p key={index} className="font-normal">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Call to Action Buttons */}
              <div className="pt-8 mt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-4 items-center">
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 dark:bg-cyan-400 dark:hover:bg-cyan-300 text-slate-950 font-bold text-xs sm:text-sm flex items-center space-x-2 shadow-lg shadow-cyan-500/20 transition-all hover:-translate-y-0.5"
                >
                  <span>Get In Touch</span>
                  <Icons.ArrowRight size={16} />
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-white dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-800 font-semibold text-xs sm:text-sm flex items-center space-x-2 transition-all hover:-translate-y-0.5 shadow-sm"
                >
                  <Download size={16} className="text-cyan-600 dark:text-cyan-400" />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>

            {/* Core Strengths Section */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest px-1">
                Core Competencies & Mindset
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {aboutData?.strengths?.map((strength, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 transition-all duration-300 space-y-2 backdrop-blur-sm shadow-sm"
                  >
                    <div className="flex items-center space-x-2 text-cyan-600 dark:text-cyan-400">
                      <ShieldCheck size={18} />
                      <h5 className="text-sm font-bold text-slate-900 dark:text-white">{strength.title}</h5>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {strength.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Quick Stats Grid & Education Badges (5 Cols) with Slide-In */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 space-y-8"
          >
            
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {aboutData?.stats?.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 transition-all duration-300 text-center space-y-1 shadow-lg backdrop-blur-md group"
                >
                  <span className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    <PureCountUp value={stat.value} />
                  </span>
                  <p className="text-xs font-bold text-cyan-600 dark:text-cyan-300 uppercase tracking-wider">
                    {stat.label}
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    {stat.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Bootcamp Credentials / Badges Box */}
            <div className="p-6 rounded-3xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 backdrop-blur-md shadow-2xl space-y-4">
              <div className="flex items-center space-x-3 border-b border-slate-200 dark:border-slate-800 pb-4">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">Verified Certifications</h4>
                  <span className="text-xs text-slate-500 dark:text-slate-400">Programming Hero Graduate</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 flex items-start space-x-3">
                  <Cpu size={18} className="text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-slate-900 dark:text-white">
                      Next Level AI-Driven Software Engineering (2026)
                    </h5>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">
                      Advanced Architecture, AI Tooling, Modern Next.js & Server Systems.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 flex items-start space-x-3">
                  <Code size={18} className="text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-slate-900 dark:text-white">
                      Full Stack Web Development - Level 1 (2020)
                    </h5>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">
                      Core Web Technologies, React, Express, MongoDB, & Authentication.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};