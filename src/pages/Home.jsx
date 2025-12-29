import { useEffect, useState } from "react";

import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { LightParticles } from "../components/LightParticle";

import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { InternshipSection } from "../components/InternshipSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const handler = (e) => setIsDark(e.detail === "dark");
    window.addEventListener("theme-change", handler);
    return () => window.removeEventListener("theme-change", handler);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <ThemeToggle />

      {/* ✅ ONLY ONE BACKGROUND EXISTS */}
      {isDark ? (
        <StarBackground />
      ) : (
        <>
          <div className="fixed inset-0 z-0 light-gradient-bg" />
          <LightParticles />
        </>
      )}

      <Navbar />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <InternshipSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};
