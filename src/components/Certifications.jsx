import { useState } from 'react';
import * as Icons from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import certificateImgLevel_1 from '../assets/Programming-Hero Certificate.jpg'; 

export const Certifications = () => {
  const Award = Icons.Award || Icons.ShieldCheck; 
  const Eye = Icons.Eye || Icons.ExternalLink;
  const X = Icons.X || Icons.XCircle;

  const [selectedImg, setSelectedImg] = useState(null);

  const certificates = [
    {
      title: "Complete Web Development Course Level-1",
      badge: "Certificate of Excellence (Top 5%)",
      issuer: "Programming Hero",
      date: "2020",
      image: certificateImgLevel_1, 
      description: "Completed JavaScript, HTML, CSS, React, mongoDB and multiple full-stack projects with top performance (among top 5% of the class)."
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-white transition-colors duration-300">
      {/* Background Glow */}
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/15 dark:bg-blue-600/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header with Scroll Animation */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <h2 className="text-xs sm:text-sm font-semibold text-cyan-600 dark:text-cyan-400 tracking-widest uppercase">
            Achievements
          </h2>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Certifications & <span className="bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">Credentials</span>
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 mx-auto rounded-full mt-2"></div>
        </motion.div>

        {/* Certificate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {certificates.map((cert, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="p-6 rounded-3xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 transition-all duration-300 backdrop-blur-md shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Image Preview Thumbnail */}
                <div 
                  className="relative h-48 w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 mb-6 cursor-pointer group/img"
                  onClick={() => setSelectedImg(cert.image)}
                >
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-slate-950/40 group-hover/img:bg-slate-950/20 transition-colors flex items-center justify-center">
                    <span className="px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-700 text-cyan-400 text-xs font-semibold flex items-center space-x-1.5 shadow-lg">
                      {Eye && <Eye size={14} />}
                      <span>Click to View</span>
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/30 dark:border-cyan-500/20">
                    {cert.date}
                  </span>
                  <span className="text-xs font-medium text-amber-700 dark:text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-md border border-amber-400/20">
                    {cert.badge}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-slate-900 dark:text-white mt-3 mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                  {Award && <Award size={20} className="text-cyan-600 dark:text-cyan-400 shrink-0" />}
                  <span>{cert.title}</span>
                </h4>

                <p className="text-sm font-medium text-slate-600 dark:text-slate-300 mb-3">
                  Issued by: <span className="text-cyan-600 dark:text-cyan-400">{cert.issuer}</span>
                </p>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800">
                <button 
                  onClick={() => setSelectedImg(cert.image)}
                  className="w-full py-3 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-slate-900 text-cyan-600 dark:text-cyan-400 font-semibold text-xs sm:text-sm flex items-center justify-center space-x-2 transition-all border border-slate-300 dark:border-slate-700/60 cursor-pointer shadow-sm"
                >
                  {Eye && <Eye size={16} />}
                  <span>View Certificate</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox / Modal for Certificate Image with Framer Motion */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedImg(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-2 shadow-2xl overflow-hidden" 
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedImg(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-950/80 text-slate-300 hover:text-white hover:bg-slate-800 transition-all border border-slate-700 cursor-pointer"
              >
                {X && <X size={20} />}
              </button>
              <img 
                src={selectedImg} 
                alt="Certificate Full View" 
                className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};