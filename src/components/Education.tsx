import { motion } from "motion/react";
import { GraduationCap, BookOpen, Calendar, Award, CheckCircle } from "lucide-react";
import { personalDetails } from "../data";

export default function Education() {
  const educationItems = [
    {
      degree: personalDetails.degree,
      institution: personalDetails.college,
      period: "2022 - 2026 (Currently in 4th Year)",
      status: "Final Year Student",
      gpa: "First Class with Distinction",
      details: [
        "Specializing in algorithmic systems, automation architecture, and Python scripting workflows.",
        "Core courseworks: Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, Software Engineering, and Operating Systems.",
        "Engaged in technical seminars, coding challenges, and software development peer reviews.",
        "Equipped with comprehensive problem-solving methodologies trained on engineering principles."
      ]
    }
  ];

  return (
    <section id="education" className="py-24 relative bg-cyber-dark scroll-mt-12">
      {/* Glow background decorative node */}
      <div className="absolute bottom-[10%] left-[-10%] w-[45vw] h-[45vw] max-w-[400px] bg-cyber-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-cyber-cyan font-mono text-xs font-semibold tracking-widest uppercase"
          >
            ACADEMIC JOURNEY
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight"
          >
            Education & Academic Focus
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyber-cyan to-cyber-primary mx-auto rounded-full" />
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto">
          {educationItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative pl-8 sm:pl-10 pb-8 last:pb-0 group"
            >
              {/* Timeline bar line */}
              <div className="absolute left-[15px] sm:left-[19px] top-4 bottom-0 w-[2px] bg-gradient-to-b from-cyber-cyan via-cyber-primary to-transparent group-last:hidden" />

              {/* Timeline node icon */}
              <div className="absolute left-0 top-1 w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-slate-900 border-2 border-cyber-cyan text-cyber-cyan flex items-center justify-center shadow-lg group-hover:border-cyber-primary group-hover:text-cyber-primary transition-all duration-300">
                <GraduationCap size={18} />
              </div>

              {/* Course Card with premium glass effects */}
              <div className="glass-panel border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden transition-all duration-300 hover:border-white/15">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-primary/5 rounded-bl-full blur-2xl pointer-events-none" />

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/5 pb-5">
                  <div className="space-y-1.5 text-left">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/25 text-xs font-mono font-medium uppercase">
                      <Calendar size={12} />
                      {item.period}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight mt-1">
                      {item.degree}
                    </h3>
                    <p className="text-base font-sans text-slate-300 font-medium">
                      {item.institution}
                    </p>
                  </div>

                  <div className="flex sm:flex-col items-start sm:items-end gap-2 flex-wrap">
                    <span className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium">
                      {item.status}
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-cyber-primary/10 border border-cyber-primary/20 text-cyber-primary text-xs font-mono font-medium">
                      Narayanaguru CSE Portfolio Approved
                    </span>
                  </div>
                </div>

                {/* Course Details List */}
                <div className="space-y-4 text-left">
                  <h4 className="text-sm font-mono text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <BookOpen size={16} className="text-cyber-cyan" />
                    ACADEMIC FOCUS & ENGINEERING COURSEWORK
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {item.details.map((detail, di) => (
                      <div 
                        key={di} 
                        className="flex gap-3 items-start bg-white/3 border border-white/5 rounded-xl p-4 transition-colors duration-300 hover:bg-white/5"
                      >
                        <CheckCircle size={16} className="text-cyber-primary hover:scale-110 transition-transform mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-slate-300 leading-relaxed font-sans">
                          {detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
