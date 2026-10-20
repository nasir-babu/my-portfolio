import { useState } from 'react';
import * as Icons from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/projectsData';

export const Projects = () => {
  const [activeProject, setActiveProject] = useState(projectsData[0] || null);
  const [modalProject, setModalProject] = useState(null);

  if (!activeProject) return null;

  const ExternalLink = Icons.ExternalLink || Icons.Share2;
  const Github = Icons.Github || Icons.Code;
  const Info = Icons.Info || Icons.FileText;
  const X = Icons.X || Icons.XCircle;
  const CheckCircle = Icons.CheckCircle || Icons.Check;
  const ChevronLeft = Icons.ChevronLeft;
  const ChevronRight = Icons.ChevronRight;

  // Carousel Handlers for Bottom Big Box
  const handlePrev = () => {
    const currentIndex = projectsData.findIndex(p => p.id === activeProject.id);
    const prevIndex = (currentIndex - 1 + projectsData.length) % projectsData.length;
    setActiveProject(projectsData[prevIndex]);
  };

  const handleNext = () => {
    const currentIndex = projectsData.findIndex(p => p.id === activeProject.id);
    const nextIndex = (currentIndex + 1) % projectsData.length;
    setActiveProject(projectsData[nextIndex]);
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-white transition-colors duration-300">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-cyan-500/15 dark:bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-blue-600/15 dark:bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header with Scroll Animation */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-3"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 dark:border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-xs font-semibold tracking-widest uppercase">
            <Icons.FolderGit2 size={14} />
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Featured <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Click any thumbnail above or use the side arrows on the main view below to switch projects.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 mx-auto rounded-full mt-3"></div>
        </motion.div>

        {/* TOP: Gallery Selector Thumbnails */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {projectsData.map((project, idx) => {
            const isActive = activeProject.id === project.id;
            return (
              <motion.button
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setActiveProject(project)}
                className={`relative aspect-square w-full rounded-2xl overflow-hidden border-2 transition-all duration-300 group text-left ${
                  isActive
                    ? "border-cyan-500 dark:border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)] scale-[1.02]"
                    : "border-slate-300 dark:border-slate-800 opacity-70 hover:opacity-100 hover:border-slate-400 dark:hover:border-slate-600"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 bg-white/90 dark:bg-slate-950/85 backdrop-blur-sm p-2.5 flex flex-col justify-end border-t border-slate-200 dark:border-slate-800/50">
                  <span className="text-xs font-bold text-slate-900 dark:text-white truncate">
                    {project.title}
                  </span>
                  <span className="text-[10px] text-cyan-600 dark:text-cyan-400 truncate">
                    {project.subtitle || "Featured Web App"}
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* BOTTOM: Main Active Project Showcase Display with Side Arrow Controls */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          
          {/* Left Arrow for Bottom Box */}
          <button
            onClick={handlePrev}
            className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white dark:bg-slate-850/90 border border-cyan-500/40 text-cyan-600 dark:text-cyan-400 flex items-center justify-center hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-slate-950 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] cursor-pointer shadow-md"
            title="Previous Project"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Right Arrow for Bottom Box */}
          <button
            onClick={handleNext}
            className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white dark:bg-slate-850/90 border border-cyan-500/40 text-cyan-600 dark:text-cyan-400 flex items-center justify-center hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-slate-950 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] cursor-pointer shadow-md"
            title="Next Project"
          >
            <ChevronRight size={28} />
          </button>

          {/* Main Content Box */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 backdrop-blur-md shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Big Image Preview & Action Buttons */}
            <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 group shadow-xl bg-slate-100 dark:bg-slate-950 min-h-[380px] sm:min-h-[440px] flex-grow">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 absolute inset-0"
                />
                <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-slate-950/0 transition-colors pointer-events-none"></div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 dark:bg-cyan-400 dark:hover:bg-cyan-300 text-slate-950 font-bold text-xs sm:text-sm flex items-center space-x-2 shadow-lg shadow-cyan-500/20 transition-all hover:-translate-y-0.5"
                >
                  <span>Live Demo</span>
                  <ExternalLink size={16} />
                </a>

                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-white dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-800 font-semibold text-xs sm:text-sm flex items-center space-x-2 transition-all hover:-translate-y-0.5 shadow-sm"
                >
                  <Github size={16} className="text-cyan-600 dark:text-cyan-400" />
                  <span>Source Code</span>
                </a>

                <button
                  onClick={() => setModalProject(activeProject)}
                  className="px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-cyan-600 dark:text-cyan-400 border border-slate-300 dark:border-slate-700 font-semibold text-xs sm:text-sm flex items-center space-x-2 transition-all hover:-translate-y-0.5 shadow-sm cursor-pointer"
                >
                  <Info size={16} />
                  <span>Details & Case Study</span>
                </button>
              </div>
            </div>

            {/* Right Column: Project Info & Grouped Tech Stack */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-semibold px-3 py-1 rounded-md bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 dark:border-cyan-500/20">
                  {activeProject.subtitle || "Web Application"}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-3">
                  {activeProject.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-2">
                  {activeProject.description}
                </p>
              </div>

              {/* Grouped Tech Stack Display */}
              <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                  Technologies Used
                </h4>

                {activeProject.techStack ? (
                  <div className="space-y-3">
                    {Object.entries(activeProject.techStack).map(([category, items], idx) => (
                      <div key={idx} className="space-y-1.5">
                        <span className="text-[11px] font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
                          {category}:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {items?.map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-200 font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tags?.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-cyan-600 dark:text-cyan-300 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Secondary Direct Action Links */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center space-x-4">
                <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 flex items-center space-x-1"
                >
                  <span>Launch Live Site</span>
                  <ExternalLink size={14} />
                </a>
                <span className="text-slate-400">•</span>
                <button
                  onClick={() => setModalProject(activeProject)}
                  className="text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white flex items-center space-x-1 cursor-pointer"
                >
                  <span>Read Full Case Study</span>
                  <Info size={14} />
                </button>
              </div>
            </div>

          </div>
        </motion.div>

      </div>

      {/* ENHANCED GLASS & FONT MODAL WITH FRAMER MOTION */}
      <AnimatePresence>
        {modalProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-cyan-500/30 p-6 sm:p-10 shadow-2xl my-8 space-y-8 text-slate-900 dark:text-slate-100 max-h-[90vh] overflow-y-auto backdrop-blur-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Background Project Image Blur Effect */}
              <div 
                className="absolute inset-0 bg-cover bg-top opacity-5 dark:opacity-10 blur-2xl pointer-events-none"
                style={{ backgroundImage: `url(${modalProject.image})` }}
              ></div>

              {/* Modal Close Button */}
              <button
                onClick={() => setModalProject(null)}
                className="absolute top-6 right-6 p-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-cyan-500 hover:text-white text-slate-700 dark:text-slate-200 transition-all z-20 border border-slate-200 dark:border-slate-700 shadow-lg cursor-pointer"
              >
                <X size={24} />
              </button>

              {/* Header */}
              <div className="relative z-10 border-b border-slate-200 dark:border-slate-800 pb-6">
                <span className="text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-lg bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 uppercase tracking-widest">
                  Project Deep-Dive Case Study
                </span>
                <h3 className="text-3xl sm:text-5xl font-black text-slate-950 dark:text-white mt-4 tracking-tight">
                  {modalProject.title}
                </h3>
                <p className="text-base sm:text-lg text-cyan-600 dark:text-cyan-400 mt-2 font-semibold">
                  {modalProject.subtitle}
                </p>
                <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 mt-4 leading-relaxed font-normal">
                  {modalProject.description}
                </p>
              </div>

              {/* Key Features */}
              {modalProject.keyFeatures && (
                <div className="relative z-10 space-y-4">
                  <h4 className="text-base font-bold text-cyan-700 dark:text-cyan-300 uppercase tracking-wider flex items-center space-x-2">
                    <CheckCircle size={20} className="text-cyan-600 dark:text-cyan-400" />
                    <span>Key Features & Modules</span>
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {Object.entries(modalProject.keyFeatures).map(([role, features], fIdx) => (
                      <div key={fIdx} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 space-y-3 backdrop-blur-md shadow-sm">
                        <h5 className="text-sm font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider border-b border-slate-200 dark:border-slate-800 pb-2">
                          {role} Module
                        </h5>
                        <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200 list-disc list-inside">
                          {features.map((feat, i) => (
                            <li key={i} className="leading-relaxed font-medium">{feat}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Challenges & Solutions */}
              {(modalProject.challenges || modalProject.solutions) && (
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5">
                  {modalProject.challenges && (
                    <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-rose-500/30 space-y-3 backdrop-blur-md shadow-sm">
                      <h4 className="text-sm font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider flex items-center space-x-2">
                        <span>Technical Challenges</span>
                      </h4>
                      <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                        {Array.isArray(modalProject.challenges) ? modalProject.challenges[0] : modalProject.challenges}
                      </p>
                    </div>
                  )}

                  {modalProject.solutions && (
                    <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-emerald-500/30 space-y-3 backdrop-blur-md shadow-sm">
                      <h4 className="text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider flex items-center space-x-2">
                        <span>Solutions Implemented</span>
                      </h4>
                      <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                        {Array.isArray(modalProject.solutions) ? modalProject.solutions[0] : modalProject.solutions}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Future Plans */}
              {modalProject.futurePlans && (
                <div className="relative z-10 p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-indigo-500/30 space-y-3 backdrop-blur-md shadow-sm">
                  <h4 className="text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                    Future Roadmap & Enhancements
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base text-slate-700 dark:text-slate-200 list-disc list-inside">
                    {modalProject.futurePlans.map((plan, pIdx) => (
                      <li key={pIdx} className="leading-relaxed font-medium">{plan}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Footer Modal Actions */}
              <div className="relative z-10 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-4 justify-end">
                <a
                  href={modalProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 dark:bg-cyan-400 dark:hover:bg-cyan-300 text-slate-950 font-bold text-sm flex items-center space-x-2 shadow-lg shadow-cyan-500/20 transition-all hover:-translate-y-0.5"
                >
                  <span>Live Preview</span>
                  <ExternalLink size={16} />
                </a>
                <a
                  href={modalProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 border border-slate-300 dark:border-slate-700 font-bold text-sm flex items-center space-x-2 transition-all hover:-translate-y-0.5 shadow-sm"
                >
                  <Github size={16} className="text-cyan-600 dark:text-cyan-400" />
                  <span>Source Code</span>
                </a>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};