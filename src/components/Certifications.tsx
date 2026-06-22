import { motion } from "motion/react";
import { Award, ShieldCheck, CheckCircle, Calendar, FileText, ArrowUpRight } from "lucide-react";
import { certificationsData } from "../data";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative bg-slate-950/40 border-y border-white/5 scroll-mt-12">
      {/* Glow elements */}
      <div className="absolute top-[30%] right-[-5%] w-[35vw] h-[35vw] max-w-[350px] bg-cyber-primary/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-cyber-primary font-mono text-xs font-semibold tracking-widest uppercase"
          >
            CREDENTIAL VALIDATION
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight"
          >
            Certifications & Training
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyber-primary to-cyber-cyan mx-auto rounded-full" />
        </div>

        {/* Certifications Card Container */}
        <div className="max-w-3xl mx-auto">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-panel border border-white/10 rounded-2xl p-6 sm:p-8 relative overflow-hidden transition-all duration-300 hover:border-cyber-primary/30 group text-left"
            >
              {/* Internal abstract visual certificate seal backing */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-cyber-primary/5 rounded-bl-full blur-2xl pointer-events-none" />

              <div className="flex flex-col md:flex-row gap-6 items-start">
                
                {/* Badge Left Column */}
                <div className="p-4 rounded-xl bg-cyber-primary/10 border border-cyber-primary/25 text-cyber-primary flex-shrink-0 flex items-center justify-center self-start shadow-inner">
                  <Award size={36} />
                </div>

                {/* Main description Center/Right Column */}
                <div className="space-y-6 flex-1 w-full">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                       <span className="inline-flex items-center gap-1 text-2xs font-mono font-bold uppercase tracking-wider text-cyber-primary bg-cyber-primary/10 border border-cyber-primary/20 px-2 py-0.5 rounded-md">
                         <ShieldCheck size={12} />
                         Verified Credentials
                       </span>
                       <span className="inline-flex items-center gap-1 text-2xs font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded-md">
                         <Calendar size={12} />
                         {cert.date}
                       </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white mt-1.5 leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-sm sm:text-base font-sans text-slate-300">
                      Issued by <span className="font-semibold text-white">{cert.issuer}</span>
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills learned subgrid */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest flex items-center gap-2">
                      <FileText size={14} className="text-cyber-cyan" />
                      Domain Competencies Certified
                    </h4>
                    
                    <div className="flex flex-wrap gap-2">
                      {cert.skillsLearned.map((skill) => (
                        <span
                          key={skill}
                          className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-sans text-slate-300 transition-colors hover:border-cyber-cyan/30"
                        >
                          <CheckCircle size={12} className="text-cyber-primary" />
                          {skill}
                        </span>
                      ))}
                    </div>
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
