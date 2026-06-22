import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Competencies from "./components/Competencies";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = [
      "home",
      "about",
      "education",
      "skills",
      "competencies",
      "certifications",
      "contact"
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -25% 0px", // Trigger when section occupies the center 50% of screen
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div id="portfolio-root" className="min-h-screen bg-cyber-dark text-slate-100 selection:bg-cyber-primary/30 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Dynamic Header */}
      <Header activeSection={activeSection} />

      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Me */}
        <About />

        {/* 3. Education Timeline */}
        <Education />

        {/* 4. Technical Skills */}
        <Skills />

        {/* 5. Personal Competencies */}
        <Competencies />

        {/* 6. Certifications */}
        <Certifications />

        {/* 7. Contact Section */}
        <Contact />
      </main>

      {/* 8. Footer */}
      <Footer />
    </div>
  );
}

