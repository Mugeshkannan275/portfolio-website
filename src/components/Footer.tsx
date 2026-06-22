import { Github, Linkedin, Mail, Phone, ArrowUp, ArrowUpRight, ShieldCheck } from "lucide-react";
import { personalDetails } from "../data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="portfolio-footer" className="bg-[#040507] border-t border-white/5 py-12 relative overflow-hidden text-left">
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-[radial-gradient(ellipse_50%_50%_at_50%_100%,#10b98108,transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/5 pb-8">
          
          {/* Logo / Name */}
          <div className="space-y-1">
            <h4 className="text-lg font-display font-black text-white tracking-tight">
              C. Mugeshkannan <span className="text-cyber-primary font-normal text-sm font-mono">&lt;B.E CSE&gt;</span>
            </h4>
            <p className="text-xs text-slate-500 font-sans">
              Narayanaguru College of Engineering • Thoothukudi, India
            </p>
          </div>

          {/* Social Icons Links panel */}
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${personalDetails.email}`}
              aria-label="Email Mugeshkannan"
              className="p-3 rounded-xl bg-white/3 border border-white/5 text-slate-400 hover:text-cyber-primary hover:border-cyber-primary/20 transition-all duration-300"
            >
              <Mail size={16} />
            </a>
            
            <a
              href={`tel:${personalDetails.phone}`}
              aria-label="Call Mugeshkannan"
              className="p-3 rounded-xl bg-white/3 border border-white/5 text-slate-400 hover:text-cyber-cyan hover:border-cyber-cyan/20 transition-all duration-300"
            >
              <Phone size={16} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Linkedin profile"
              className="p-3 rounded-xl bg-white/3 border border-white/5 text-slate-400 hover:text-blue-400 hover:border-blue-400/20 transition-all duration-300 flex items-center gap-1.5"
            >
              <Linkedin size={16} />
              <span className="text-3s font-mono font-medium sm:inline hidden uppercase tracking-wider">Connect</span>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-3 rounded-xl bg-white/3 border border-white/5 text-slate-400 hover:text-white hover:border-white/10 transition-all duration-300 flex items-center gap-1.5"
            >
              <Github size={16} />
              <span className="text-3s font-mono font-medium sm:inline hidden uppercase tracking-wider">GitHub</span>
            </a>
          </div>

        </div>

        {/* Lower row: Copyright detail and back to top info */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-xs text-slate-500 font-sans text-center sm:text-left">
            © {currentYear} C. Mugeshkannan. Engineered with utmost precision. Narayanaguru CSE.
          </p>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-slate-600 text-[10px] uppercase font-mono tracking-widest bg-white/3 px-2 py-1 rounded">
              <ShieldCheck size={12} className="text-cyber-primary" />
              <span>Verified Secure</span>
            </div>
            
            <button
              onClick={handleScrollToTop}
              className="px-4 py-2 rounded-lg bg-white/3 border border-white/5 hover:border-cyber-primary/30 text-slate-400 hover:text-white text-xs font-mono font-bold tracking-tight transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <span>Back To Top</span>
              <ArrowUp size={12} className="text-cyber-primary" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
