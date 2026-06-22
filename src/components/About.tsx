import { motion } from "motion/react";
import { User, Calendar, MapPin, Mail, Phone, Briefcase, Target, Award, Heart } from "lucide-react";
import { personalDetails } from "../data";

export default function About() {
  const profileItems = [
    { icon: <User className="text-cyber-primary" size={18} />, label: "Full Name", value: personalDetails.name },
    { icon: <Calendar className="text-cyber-cyan" size={18} />, label: "Date of Birth", value: personalDetails.dob },
    { icon: <Mail className="text-purple-400" size={18} />, label: "Email", value: personalDetails.email, href: `mailto:${personalDetails.email}` },
    { icon: <Phone className="text-emerald-400" size={18} />, label: "Phone", value: personalDetails.phone, href: `tel:${personalDetails.phone}` },
    { 
      icon: <MapPin className="text-rose-400" size={18} />, 
      label: "Address", 
      value: `${personalDetails.address.street}, ${personalDetails.address.village}, ${personalDetails.address.taluk}, ${personalDetails.address.district} - ${personalDetails.address.pincode}` 
    },
  ];

  return (
    <section id="about" className="py-24 relative bg-slate-950/40 border-y border-white/5 scroll-mt-12">
      {/* Glow ambient background nodes */}
      <div className="absolute top-[20%] right-[-5%] w-[35vw] h-[35vw] max-w-[350px] bg-cyber-primary/5 rounded-full blur-[80px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-cyber-primary font-mono text-xs font-semibold tracking-widest uppercase"
          >
            GET TO KNOW ME
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight"
          >
            About Me
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyber-primary to-cyber-cyan mx-auto rounded-full" />
        </div>

        {/* Contents Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Personal Info Summary Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div className="glass-panel border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 h-full flex flex-col justify-center">
              <h3 className="text-xl font-display font-semibold text-white border-b border-white/5 pb-4 flex items-center gap-2">
                <User size={20} className="text-cyber-primary" />
                Personal Profile
              </h3>
              
              <div className="space-y-5">
                {profileItems.map((item, index) => (
                  <div key={index} className="flex gap-4 items-start text-left">
                    <div className="p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/10 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="space-y-0.5 min-w-0">
                      <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">{item.label}</p>
                      {item.href ? (
                        <a 
                          href={item.href} 
                          className="text-sm font-sans font-medium text-white hover:text-cyber-primary transition-colors block truncate hover:underline"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-sans font-medium text-slate-200 break-words leading-relaxed">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Career Objective details, target goals */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Career Goal Glass Panel */}
            <div className="glass-panel border border-white/10 rounded-2xl p-6 sm:p-8 space-y-5 relative overflow-hidden flex-1 flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyber-cyan/10 rounded-bl-full blur-xl pointer-events-none" />
              <div className="inline-flex items-center gap-2 text-cyber-cyan font-mono text-xs uppercase bg-cyber-cyan/10 px-3 py-1 rounded-full w-fit">
                <Target size={14} />
                <span>Career Goal</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white leading-tight">
                To excel as a Software Developer & build impactful digital products.
              </h3>
              
              <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
                "{personalDetails.careerGoal}"
              </p>
            </div>

            {/* Strategic recruitment objectives */}
            <div className="glass-panel border border-white/10 rounded-2xl p-6 sm:p-8 space-y-5 relative overflow-hidden flex-1 flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyber-primary/10 rounded-bl-full blur-xl pointer-events-none" />
              <div className="inline-flex items-center gap-2 text-cyber-primary font-mono text-xs uppercase bg-cyber-primary/10 px-3 py-1 rounded-full w-fit">
                <Award size={14} />
                <span>Hiring Objective</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white leading-tight">
                Recruiter-focused, value-driven software Engineering mindset.
              </h3>
              
              <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
                As a fourth-year Computer Science Engineering student, my goal is to blend analytical engineering practices with strong foundational programming like Python to build reliable, high-performing applications.
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
