import { useState } from 'react';
import * as Icons from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { practicalExperienceData, educationData } from '../data/timelineData';

export const ExperienceEducation = () => {
  const [activeTab, setActiveTab] = useState('handsOn');

  const Code = Icons.Code2 || Icons.Code;
  const GraduationCap = Icons.GraduationCap || Icons.BookOpen;
  const Calendar = Icons.Calendar || Icons.Clock;
  const CheckCircle2 = Icons.CheckCircle2 || Icons.Check;
  const Sparkles = Icons.Sparkles || Icons.Award;

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-900 text-white">
      {/* Background Cyberpunk Glows */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header with Scroll Animation */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-3"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-widest uppercase">
            <Sparkles size={14} />
            <span>Technical Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Development & <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            My hands-on engineering focus, professional software bootcamps, and academic credentials.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mt-3"></div>
        </motion.div>

        {/* Tab Switcher with Scale Animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div className="p-1.5 rounded-2xl bg-slate-850 border border-slate-800 backdrop-blur-md inline-flex space-x-2 shadow-xl">
            <button
              onClick={() => setActiveTab('handsOn')}
              className={`px-6 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center space-x-2 transition-all duration-300 cursor-pointer ${
                activeTab === 'handsOn'
                  ? 'bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/20 scale-105'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Code size={18} />
              <span>Practical Development</span>
            </button>

            <button
              onClick={() => setActiveTab('education')}
              className={`px-6 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center space-x-2 transition-all duration-300 cursor-pointer ${
                activeTab === 'education'
                  ? 'bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/20 scale-105'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <GraduationCap size={18} />
              <span>Bootcamps & Education</span>
            </button>
          </div>
        </motion.div>

        {/* Timeline Content with Smooth Transition on Tab Switch */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'handsOn' ? (
              /* Practical Engineering Timeline */
              <motion.div 
                key="handsOn"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 space-y-10"
              >
                {practicalExperienceData.map((item, idx) => (
                  <motion.div 
                    key={item.id} 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.15 }}
                    className="relative pl-6 sm:pl-10 group"
                  >
                    
                    {/* Dot */}
                    <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-900 border-2 border-cyan-400/60 group-hover:border-cyan-400 flex items-center justify-center text-cyan-400 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all">
                      <Code size={14} />
                    </div>

                    {/* Card */}
                    <div className="p-6 sm:p-8 rounded-3xl bg-slate-850/90 border border-slate-800/80 group-hover:border-cyan-500/30 backdrop-blur-md shadow-2xl transition-all duration-300 space-y-4">
                      
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-4">
                        <div>
                          <span className="text-xs font-semibold px-3 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                            {item.type}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-bold text-white mt-2">
                            {item.role}
                          </h3>
                          <p className="text-sm font-semibold text-cyan-300">
                            {item.company}
                          </p>
                        </div>

                        <div className="inline-flex items-center space-x-1.5 text-xs text-slate-300 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                          <Calendar size={14} className="text-cyan-400" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      <p className="text-sm text-slate-300 leading-relaxed font-normal">
                        {item.description}
                      </p>

                      {item.highlights && (
                        <ul className="space-y-2 pt-2 text-xs sm:text-sm text-slate-200">
                          {item.highlights.map((point, pIdx) => (
                            <li key={pIdx} className="flex items-start space-x-2">
                              <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              /* Education Timeline */
              <motion.div 
                key="education"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 space-y-10"
              >
                {educationData.map((item, idx) => (
                  <motion.div 
                    key={item.id} 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.15 }}
                    className="relative pl-6 sm:pl-10 group"
                  >
                    
                    {/* Dot */}
                    <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-900 border-2 border-cyan-400/60 group-hover:border-cyan-400 flex items-center justify-center text-cyan-400 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all">
                      <GraduationCap size={16} />
                    </div>

                    {/* Card */}
                    <div className="p-6 sm:p-8 rounded-3xl bg-slate-850/90 border border-slate-800/80 group-hover:border-cyan-500/30 backdrop-blur-md shadow-2xl transition-all duration-300 space-y-3">
                      
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-slate-900 text-cyan-400 border border-slate-800">
                            {item.type}
                          </span>
                          <h3 className="text-lg sm:text-xl font-bold text-white mt-1.5">
                            {item.degree}
                          </h3>
                          <p className="text-sm font-semibold text-cyan-300 mt-0.5">
                            {item.institution}
                          </p>
                        </div>

                        <div className="inline-flex items-center space-x-1.5 text-xs text-slate-300 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                          <Calendar size={14} className="text-cyan-400" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 text-xs font-semibold text-emerald-400">
                        <Sparkles size={14} />
                        <span>Status: {item.result}</span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                        {item.details}
                      </p>

                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};