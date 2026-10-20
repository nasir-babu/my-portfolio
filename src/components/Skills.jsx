import { useState } from 'react';
import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/projectsData';

export const Skills = () => {
  const frontendSkills = skillsData.filter((s) => s.category === "Frontend");
  const backendSkills = skillsData.filter((s) => s.category === "Backend");
  const toolSkills = skillsData.filter((s) => s.category === "Tools");

  // Framer Motion Animation Variants for Stagger Effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section
      id="skills"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-white transition-colors duration-300"
    >
      {/* Soft Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-cyan-500/15 dark:bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-500/15 dark:bg-blue-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 dark:border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-xs font-semibold tracking-widest uppercase">
            <Icons.Cpu size={14} />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Technical{" "}
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Everything I use to design, build, and deploy high-performance web
            applications at a glance.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 mx-auto rounded-full mt-3"></div>
        </motion.div>

        {/* Two-Column Balanced Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Frontend (Takes more space) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700/70 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-md shadow-xl flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-slate-200 dark:border-slate-700/60">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                  <Icons.Layout size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-wide">
                    Frontend Development
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    User interface & client-side ecosystem
                  </p>
                </div>
              </div>

              {/* Staggered Animated Grid for Frontend */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                {frontendSkills.map((skill, idx) => {
                  const IconComponent = Icons[skill.icon] || Icons.Code;
                  return (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      whileHover={{ scale: 1.03, x: 3 }}
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 hover:border-cyan-400/50 hover:bg-white dark:hover:bg-slate-950 transition-all group/item shadow-sm cursor-default"
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-8 h-8 rounded-lg bg-gradient-to-tr ${skill.color} p-[1px] flex items-center justify-center shrink-0`}
                        >
                          <div className="w-full h-full bg-white dark:bg-slate-950 rounded-[7px] flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                            <IconComponent size={16} />
                          </div>
                        </div>
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-200 group-hover/item:text-slate-950 dark:group-hover/item:text-white">
                          {skill.name}
                        </span>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-cyan-500/30 group-hover/item:bg-cyan-500 dark:group-hover/item:bg-cyan-400 transition-all"></span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-700/40 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">
              <span>Focus: UI / UX & Interactivity</span>
              <span className="text-cyan-600 dark:text-cyan-400">
                {frontendSkills.length} Technologies
              </span>
            </div>
          </motion.div>

          {/* Right Column: Backend & Tools (Stacked) */}
          <div className="lg:col-span-6 space-y-8">
            {/* Backend Section */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="p-6 sm:p-8 rounded-3xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700/70 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-md shadow-xl group"
            >
              <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-slate-200 dark:border-slate-700/60">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                  <Icons.Server size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-wide">
                    Backend Development
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Server, APIs & Database management
                  </p>
                </div>
              </div>

              {/* Staggered Animated Grid for Backend */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                {backendSkills.map((skill, idx) => {
                  const IconComponent = Icons[skill.icon] || Icons.Code;
                  return (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      whileHover={{ scale: 1.03, x: 3 }}
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 hover:border-cyan-400/50 hover:bg-white dark:hover:bg-slate-950 transition-all group/item shadow-sm cursor-default"
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-8 h-8 rounded-lg bg-gradient-to-tr ${skill.color} p-[1px] flex items-center justify-center shrink-0`}
                        >
                          <div className="w-full h-full bg-white dark:bg-slate-950 rounded-[7px] flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                            <IconComponent size={16} />
                          </div>
                        </div>
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-200 group-hover/item:text-slate-950 dark:group-hover/item:text-white">
                          {skill.name}
                        </span>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-cyan-500/30 group-hover/item:bg-cyan-500 dark:group-hover/item:bg-cyan-400 transition-all"></span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>

            {/* Tools Section */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="p-6 sm:p-8 rounded-3xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700/70 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-md shadow-xl group"
            >
              <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-slate-200 dark:border-slate-700/60">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                  <Icons.Wrench size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-wide">
                    Tools & Deployment
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Workflow, Version Control & Cloud
                  </p>
                </div>
              </div>

              {/* Staggered Animated Grid for Tools */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                {toolSkills.map((skill, idx) => {
                  const IconComponent = Icons[skill.icon] || Icons.Code;
                  return (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      whileHover={{ scale: 1.03, x: 3 }}
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 hover:border-cyan-400/50 hover:bg-white dark:hover:bg-slate-950 transition-all group/item shadow-sm cursor-default"
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-8 h-8 rounded-lg bg-gradient-to-tr ${skill.color} p-[1px] flex items-center justify-center shrink-0`}
                        >
                          <div className="w-full h-full bg-white dark:bg-slate-950 rounded-[7px] flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                            <IconComponent size={16} />
                          </div>
                        </div>
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-200 group-hover/item:text-slate-950 dark:group-hover/item:text-white">
                          {skill.name}
                        </span>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-cyan-500/30 group-hover/item:bg-cyan-500 dark:group-hover/item:bg-cyan-400 transition-all"></span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};