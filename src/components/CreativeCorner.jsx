import { useState } from "react";
import * as Icons from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { hobbiesData } from "../data/hobbiesData";

export const CreativeCorner = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const Palette = Icons.Palette || Icons.Brush;
  const Sparkles = Icons.Sparkles || Icons.Award;
  const Eye = Icons.Eye || Icons.Maximize2;
  const X = Icons.X || Icons.Plus;

  return (
    <section
      id="creative-corner"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-white transition-colors duration-300 border-t border-slate-200 dark:border-slate-800/60"
    >
      {/* Background Cyberpunk Ambient Glows */}
      <div className="absolute top-1/3 left-10 w-[450px] h-[450px] bg-cyan-500/15 dark:bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-blue-600/15 dark:bg-blue-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 dark:border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-xs font-semibold tracking-widest uppercase">
            <Palette size={14} />
            <span>{hobbiesData.subtitle}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Beyond{" "}
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              The Code
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Exploring visual art, colors, and balance outside software
            engineering.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 mx-auto rounded-full mt-3"></div>
        </motion.div>

        {/* Two-Column Grid with proper centering and 2-column offset look */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-6xl mx-auto justify-center">
          
          {/* LEFT: Text & Creative Philosophy Box (6 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="p-8 rounded-3xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 backdrop-blur-md shadow-2xl relative overflow-hidden group">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400">
                  <Sparkles size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Artistry Meets Engineering
                  </h3>
                  <span className="text-xs text-cyan-600 dark:text-cyan-400 font-medium">
                    Sharpening Visual & UI Intuition
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                {hobbiesData.description}
              </p>

              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span className="flex items-center space-x-1">
                  <Palette size={14} className="text-cyan-500" />
                  <span>Hand-drawn Artwork</span>
                </span>
                <span className="font-semibold text-cyan-600 dark:text-cyan-400">
                  6 Showcase Pieces
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: 3x3 Interactive Image Grid (5 Cols with col-start offset for balance) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 lg:col-start-8"
          >
            <div className="grid grid-cols-3 gap-3 sm:gap-4 p-4 rounded-3xl bg-white/60 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 backdrop-blur-md shadow-xl">
              {hobbiesData.sketches.map((art, idx) => (
                <motion.div
                  key={art.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  whileHover={{ scale: 1.04 }}
                  onClick={() => setSelectedImage(art)}
                  className="relative aspect-square rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700/60 cursor-pointer group shadow-sm"
                >
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Hover Cyberpunk Overlay */}
                  <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-2 text-center backdrop-blur-[2px]">
                    <Eye size={20} className="text-cyan-400 mb-1" />
                    <span className="text-[10px] font-bold text-white line-clamp-1">
                      {art.title}
                    </span>
                    <span className="text-[9px] text-cyan-300 uppercase tracking-wider">
                      {art.tag}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>

      {/* Lightbox Image Preview Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-slate-900 border border-slate-700 rounded-3xl p-4 overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors z-10"
              >
                <X size={20} />
              </button>

              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 mb-4">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex items-center justify-between px-2">
                <div>
                  <h4 className="text-lg font-bold text-white">
                    {selectedImage.title}
                  </h4>
                  <p className="text-xs text-cyan-400 font-medium">
                    {selectedImage.tag}
                  </p>
                </div>
                <span className="text-xs text-slate-400">Sketch Showcase</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};