import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Code, Terminal } from "lucide-react";

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Competencies", href: "#competencies" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background shift on scroll
      setScrolled(window.scrollY > 20);

      // Scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Scroll indicator bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-purple-600 z-[100] transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <header
        id="navbar-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-cyber-dark/80 backdrop-blur-md border-b border-cyber-border py-4" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#home" 
              className="flex items-center gap-2 text-white font-display font-bold text-lg sm:text-xl tracking-tight"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
            >
              <div className="relative p-2 rounded-lg bg-cyber-primary/10 border border-cyber-primary/20 text-cyber-primary flex items-center justify-center">
                <Terminal size={18} />
                <div className="absolute inset-0 bg-cyber-primary/20 blur-md rounded-lg -z-10" />
              </div>
              <span>
                Mugesh<span className="text-cyber-primary">.dev</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav id="desktop-nav" className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className={`relative px-4 py-2 font-sans text-sm font-medium transition-colors duration-200 rounded-lg ${
                      isActive 
                        ? "text-cyber-primary font-semibold" 
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavBackground"
                        className="absolute inset-0 bg-cyber-primary/10 border border-cyber-primary/20 rounded-lg -z-10"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </a>
                );
              })}
              
              {/* Contact Button Anchor */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#contact");
                }}
                className="ml-4 px-4 py-2 rounded-lg bg-cyber-primary hover:bg-cyber-primary-hover text-cyber-dark font-sans font-semibold text-sm transition-all duration-200 border border-cyber-primaryShadow shadow-lg shadow-cyber-primary/25"
              >
                Hire Me
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                id="mobile-menu-btn"
                onClick={toggleMenu}
                aria-label="Toggle navigation menu"
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden bg-cyber-dark border-b border-cyber-border"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.slice(1);
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                        isActive 
                          ? "bg-cyber-primary/10 text-cyber-primary border-l-2 border-cyber-primary" 
                          : "text-slate-300 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {link.label}
                    </a>
                  );
                })}
                <div className="pt-4 px-4">
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("#contact");
                    }}
                    className="block w-full text-center py-3 rounded-lg bg-cyber-primary hover:bg-cyber-primary-hover text-cyber-dark font-semibold transition-all duration-200 shadow-md shadow-cyber-primary/25"
                  >
                    Hire Me
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
