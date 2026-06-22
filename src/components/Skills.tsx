import { useState } from "react";
import { motion } from "motion/react";
import { 
  FileCode2, 
  Cpu, 
  Coffee, 
  BrainCircuit, 
  Globe, 
  Database,
  ArrowUpRight,
  Code2
} from "lucide-react";
import { skillsData } from "../data";

// Custom mapping for Dynamic Lucide Icons
const iconMap: { [key: string]: any } = {
  FileCode2: FileCode2,
  Cpu: Cpu,
  Coffee: Coffee,
  BrainCircuit: BrainCircuit,
  Globe: Globe,
  Database: Database,
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-24 relative bg-slate-950/40 border-y border-white/5 scroll-mt-12">
      {/* Decorative Spheres */}
      <div className="absolute top-[20%] left-[-5%] w-[35vw] h-[35vw] max-w-[350px] bg-cyber-primary/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-5%] w-[35vw] h-[35vw] max-w-[350px] bg-cyber-cyan/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-cyber-primary font-mono text-xs font-semibold tracking-widest uppercase"
          >
            TECHNICAL ARMAMENT
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight"
          >
            Technical Expertise
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyber-primary to-cyber-cyan mx-auto rounded-full" />
        </div>

        {/* Interactive Tabs Menu for Categories */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {skillsData.map((group, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-5 py-2.5 rounded-xl font-sans text-sm font-semibold transition-all duration-300 relative cursor-pointer border ${
                  isActive 
                    ? "text-cyber-primary border-cyber-primary/30" 
                    : "text-slate-400 bg-white/3 hover:bg-white/5 border-white/5 hover:text-white"
                }`}
              >
                <span>{group.category}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeSkillTabBg"
                    className="absolute inset-0 bg-cyber-primary/10 rounded-xl -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Skill Cards Grid with customized animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {skillsData[activeTab].skills.map((skill, index) => {
            const IconComponent = iconMap[skill.iconName] || Code2;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="glass-panel border border-white/10 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:border-cyber-primary/30 hover:shadow-lg hover:shadow-cyber-primary/5 group"
              >
                <div className="space-y-4">
                  
                  {/* Skill Card Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-cyber-primary group-hover:text-cyber-cyan group-hover:bg-cyber-cyan/10 group-hover:border-cyber-cyan/20 transition-all duration-300 flex-shrink-0">
                        <IconComponent size={20} />
                      </div>
                      <h3 className="font-display font-bold text-lg text-white group-hover:text-cyber-primary transition-colors text-left leading-none">
                        {skill.name}
                      </h3>
                    </div>

                    <div className="flex items-center gap-1">
                      <span className="font-mono text-xs font-bold text-cyber-primary bg-cyber-primary/10 px-2 py-0.5 rounded-lg">
                        {skill.level}%
                      </span>
                    </div>
                  </div>

                  {/* Skill Card Description */}
                  <p className="text-sm text-slate-300 font-sans leading-relaxed text-left">
                    {skill.description}
                  </p>

                </div>

                {/* Animated Progress Meter */}
                <div className="pt-6 space-y-2">
                  <div className="flex justify-between text-3s font-mono text-slate-500 uppercase tracking-widest">
                    <span>Proficiency Level</span>
                    <span>{skill.level >= 85 ? "Advanced" : "Intermediate"}</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                      className="h-full bg-gradient-to-r from-cyber-primary to-cyber-cyan rounded-full"
                    />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Python Highlight Section because it's his primary certified topic */}
        {activeTab === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-12 p-6 rounded-2xl glass-panel border border-cyber-primary/25 bg-cyber-primary/5 text-left max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="space-y-2">
              <span className="text-2xs font-mono font-bold uppercase tracking-widest text-cyber-primary bg-cyber-primary/10 px-2.5 py-1 rounded-full">
                Core Focus
              </span>
              <h4 className="text-lg font-display font-semibold text-white">
                Certified Python Developer
              </h4>
              <p className="text-sm text-slate-300 font-sans max-w-2xl leading-relaxed">
                Proficient in structured Py scripts, multi-paradigm solving, dynamic complexity analysis, and algorithms. Highly capable of translating recruitment business criteria into efficient python logic.
              </p>
            </div>
            <a
              href="#certifications"
              className="px-4 py-2.5 rounded-xl bg-cyber-primary hover:bg-cyber-primary-hover text-cyber-dark font-sans font-bold text-sm tracking-tight transition-all duration-300 flex-shrink-0 flex items-center gap-1.5 shadow-md shadow-cyber-primary/20"
            >
              View Certificate
              <ArrowUpRight size={14} />
            </a>
          </motion.div>
        )}

      </div>
    </section>
  );
}
