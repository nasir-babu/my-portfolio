import { useState } from "react";
import * as Icons from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const Mail = Icons.Mail || Icons.Send;
  const User = Icons.User || Icons.UserCheck;
  const MessageSquare = Icons.MessageSquare || Icons.FileText;
  const Send = Icons.Send || Icons.ArrowRight;
  const CheckCircle = Icons.CheckCircle || Icons.Check;
  const AlertCircle = Icons.AlertCircle || Icons.XCircle;

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "c4e79824-1267-4f83-a0aa-8877c0a43170");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully! I will get back to you soon.");
        setIsSubmitting(false);
        event.target.reset();
      } else {
        console.error("Error", data);
        setResult(data.message || "Something went wrong! Please try again.");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Error", error);
      setResult("Network error! Please check your connection.");
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-white transition-colors duration-300"
    >
      {/* Background Cyberpunk Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-[450px] h-[450px] bg-cyan-500/15 dark:bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-blue-600/15 dark:bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>

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
            <Mail size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Have a project in mind, a job opportunity, or want to connect? Drop
            a message below!
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 mx-auto rounded-full mt-3"></div>
        </motion.div>

        {/* Contact Grid: Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
          
          {/* LEFT: Contact Information Cards (5 Cols) with Slide-In */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 rounded-3xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 backdrop-blur-md shadow-2xl space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Contact Information
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                  Feel free to reach out directly via email or phone. I'm always
                  open to discussing new projects, creative ideas, or
                  opportunities.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <a
                  href="mailto:nasir21b@gmail.com"
                  className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 transition-all group shadow-sm"
                >
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Email Me
                    </span>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                      nasir21b@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+8801948860166"
                  className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 transition-all group shadow-sm"
                >
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                    <Icons.Phone size={20} />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Call / WhatsApp
                    </span>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                      +880 1948-860166
                    </p>
                  </div>
                </a>

                <div className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                    <Icons.MapPin size={20} />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Location
                    </span>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                      Rupganj, Narayanganj, Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Functional Contact Form (7 Cols) with Slide-In */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="p-8 rounded-3xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 backdrop-blur-md shadow-2xl">
              <form onSubmit={onSubmit} className="space-y-6">
                {/* Name & Email Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center space-x-1.5">
                      <User size={14} className="text-cyan-600 dark:text-cyan-400" />
                      <span>Your Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Nasirullah Babu"
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500 dark:focus:ring-cyan-400 transition-all text-sm font-medium shadow-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center space-x-1.5">
                      <Mail size={14} className="text-cyan-600 dark:text-cyan-400" />
                      <span>Your Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="name@example.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500 dark:focus:ring-cyan-400 transition-all text-sm font-medium shadow-sm"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center space-x-1.5">
                    <Icons.FileText size={14} className="text-cyan-600 dark:text-cyan-400" />
                    <span>Subject</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500 dark:focus:ring-cyan-400 transition-all text-sm font-medium shadow-sm"
                  />
                </div>

                {/* Message Textarea */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center space-x-1.5">
                    <MessageSquare size={14} className="text-cyan-600 dark:text-cyan-400" />
                    <span>Your Message</span>
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500 dark:focus:ring-cyan-400 transition-all text-sm font-medium resize-none shadow-sm"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 dark:bg-cyan-400 dark:hover:bg-cyan-300 text-slate-950 font-bold text-sm flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/20 transition-all hover:-translate-y-0.5 cursor-pointer disabled:opacity-50"
                >
                  <span>
                    {isSubmitting ? "Sending Message..." : "Send Message"}
                  </span>
                  <Send size={18} />
                </button>

                {/* Status Result Message with Framer Motion */}
                <AnimatePresence>
                  {result && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className={`p-4 rounded-xl text-xs sm:text-sm font-semibold text-center flex items-center justify-center space-x-2 ${
                        result.includes("success")
                          ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
                          : "bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300"
                      }`}
                    >
                      {result.includes("success") ? (
                        <CheckCircle size={18} />
                      ) : (
                        <AlertCircle size={18} />
                      )}
                      <span>{result}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};