import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Zap, MessageCircle, Compass, Clock, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";
import { competenciesData } from "../data";

const iconMap: { [key: string]: any } = {
  Zap: Zap,
  MessageCircle: MessageCircle,
  Compass: Compass,
  Clock: Clock,
};

export default function Competencies() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="competencies" className="py-24 relative bg-cyber-dark scroll-mt-12">
      {/* Decorative Glow elements */}
      <div className="absolute top-[40%] left-[-10%] w-[45vw] h-[45vw] max-w-[400px] bg-cyber-cyan/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[45vw] h-[45vw] max-w-[400px] bg-cyber-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-cyber-cyan font-mono text-xs font-semibold tracking-widest uppercase"
          >
            HUMAN CAPABILITY
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight"
          >
            Personal Competencies
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyber-cyan to-cyber-primary mx-auto rounded-full" />
        </div>

        {/* Competencies Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {competenciesData.map((item, index) => {
            const IconComponent = iconMap[item.iconName] || Zap;
            const isHovered = hoveredCard === item.id;
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="glass-panel border border-white/10 rounded-2xl p-6 sm:p-8 text-left transition-all duration-300 hover:border-cyber-cyan/30 hover:shadow-lg hover:shadow-cyber-cyan/5 flex flex-col justify-between relative overflow-hidden group"
              >
                {/* Visual Glow Node on inside */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyber-cyan/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="space-y-4">
                  
                  {/* Title & Icon Header */}
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/25 text-cyber-cyan group-hover:bg-cyber-cyan group-hover:text-cyber-dark transition-all duration-300">
                      <IconComponent size={20} />
                    </div>
                    <h3 className="text-xl font-display font-bold text-white">
                      {item.title}
                    </h3>
                  </div>

                  {/* Core Attribute Statement */}
                  <p className="text-sm sm:text-base text-slate-200 font-sans leading-relaxed pt-2">
                    {item.description}
                  </p>

                </div>

                {/* Recruiter Trust Fact / Scenario Segment */}
                <div className="mt-6 border-t border-white/5 pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles size={14} className="text-cyber-cyan" />
                    <span className="text-3xs font-mono text-slate-400 uppercase tracking-widest font-semibold">
                      Real-world Application
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans italic bg-slate-900/30 border-l-2 border-slate-700/50 p-3 rounded-r-xl">
                    "{item.exampleScenario}"
                  </p>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
