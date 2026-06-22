import { motion } from "motion/react";
import { ArrowUpRight, Code, MessageSquare, Download, GraduationCap, MapPin, Sparkles } from "lucide-react";
import { personalDetails } from "../data";

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-cyber-dark"
    >
      {/* Decorative Blur Spheres */}
      <div className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] bg-cyber-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] bg-cyber-cyan/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[35vw] h-[35vw] max-w-[350px] max-h-[350px] bg-cyber-purple/10 rounded-full blur-[110px] pointer-events-none" />

      {/* Cyberpunk Grid Background */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left: Text & Pitch */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyber-primary/10 border border-cyber-primary/25 text-cyber-primary text-xs font-mono font-medium tracking-wider"
            >
              <Sparkles size={14} className="animate-pulse" />
              <span>FINAL-YEAR COMPUTER SCIENCE ENGINEERING STUDENT</span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-none"
              >
                Hi, I'm <br />
                <span className="bg-gradient-to-r from-cyber-primary via-cyber-cyan to-teal-400 bg-clip-text text-transparent glow-emerald">
                  {personalDetails.name}
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="text-lg sm:text-xl text-slate-300 font-sans font-light max-w-2xl leading-relaxed"
              >
                Aspiring software developer pursuing B.E at{" "}
                <span className="text-white font-medium border-b border-cyber-cyan/30">
                  {personalDetails.college}
                </span>
                . Driven by logical problem solving and clean application architecture.
              </motion.p>
            </div>

            {/* Quick Metadata badges */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-300">
                <GraduationCap size={14} className="text-cyber-primary" />
                <span>B.E (CSE) - 4th Year</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-300">
                <MapPin size={14} className="text-cyber-cyan" />
                <span>Thoothukudi, India</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <button
                onClick={() => handleScrollTo("#contact")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-cyber-primary hover:bg-cyber-primary-hover text-cyber-dark font-sans font-bold text-base transition-all duration-300 shadow-lg shadow-cyber-primary/25 cursor-pointer hover:shadow-cyber-primary/40 translate-y-0 hover:-translate-y-0.5"
              >
                Get In Touch
                <ArrowUpRight size={18} />
              </button>
              
              <button
                onClick={() => handleScrollTo("#skills")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 font-sans font-semibold text-base transition-all duration-300 cursor-pointer"
              >
                Explore Skills
                <Code size={18} className="text-cyber-cyan" />
              </button>
            </motion.div>
          </div>

          {/* Right: Elegant Code/Dev Visual Mockup */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative mx-auto max-w-[420px] w-full"
            >
              {/* Glow Behind Terminal */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyber-primary/20 to-cyber-cyan/20 blur-2xl rounded-3xl -z-10" />

              {/* Terminal Card */}
              <div className="glass-panel border border-white/10 rounded-2xl shadow-2xl overflow-hidden font-mono text-xs">
                {/* Header Dots */}
                <div className="bg-slate-900/40 px-4 py-3 flex items-center justify-between border-b border-white/5">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                  </div>
                  <span className="text-slate-500 text-2xs uppercase tracking-wider">developer-shell.py</span>
                  <div className="w-12 h-1 bg-transparent" /> {/* Spacer */}
                </div>

                {/* Content */}
                <div className="p-5 space-y-4 text-left leading-relaxed">
                  <div>
                    <span className="text-pink-400">class</span> <span className="text-cyber-cyan">Developer</span>:
                  </div>
                  <div className="pl-4">
                    <span className="text-pink-400">def</span> <span className="text-amber-300">__init__</span>(<span className="text-purple-400">self</span>):
                  </div>
                  <div className="pl-8 space-y-1">
                    <div>
                      <span className="text-purple-400">self</span>.name = <span className="text-emerald-400">"{personalDetails.name}"</span>
                    </div>
                    <div>
                      <span className="text-purple-400">self</span>.role = <span className="text-emerald-400">"Computer Science Engineer"</span>
                    </div>
                    <div>
                      <span className="text-purple-400">self</span>.college = <span className="text-emerald-400">"Narayanaguru CSE"</span>
                    </div>
                    <div>
                      <span className="text-purple-400">self</span>.skills = [<span className="text-emerald-400">"Python"</span>, <span className="text-emerald-400">"Problem Solving"</span>, <span className="text-emerald-400">"C"</span>]
                    </div>
                    <div>
                      <span className="text-purple-400">self</span>.year = <span className="text-cyan-400">4</span>
                    </div>
                  </div>

                  <div className="pl-4">
                    <span className="text-pink-400">def</span> <span className="text-amber-300">get_objective</span>(<span className="text-purple-400">self</span>):
                  </div>
                  <div className="pl-8 text-slate-400">
                    <span className="text-pink-400">return</span> <span className="text-purple-400">self</span>._solve_problems_innovatively()
                  </div>

                  <div className="border-t border-white/5 pt-4">
                    <div className="text-slate-500"># Output query execution ...</div>
                    <div className="text-white mt-1">
                      &gt;&gt;&gt; print(Developer().name)
                    </div>
                    <div className="text-cyber-primary font-bold mt-1">
                      C. Mugeshkannan
                    </div>
                    <div className="text-white mt-1">
                      &gt;&gt;&gt; print(Developer().skills)
                    </div>
                    <div className="text-cyber-cyan font-semibold mt-1">
                      ['Python', 'Problem Solving', 'C Programming']
                    </div>
                  </div>
                </div>
              </div>

              {/* Status floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-cyber-dark border border-white/10 px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyber-primary animate-ping" />
                <span className="w-2.5 h-2.5 rounded-full bg-cyber-primary absolute" />
                <div className="text-left">
                  <p className="text-3s text-slate-500 font-mono leading-none">STATUS</p>
                  <p className="text-xs font-sans font-bold text-white mt-0.5 leading-none">Ready to Hire</p>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>

      {/* Background elegant curve separator at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
    </section>
  );
}
