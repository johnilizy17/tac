"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroCarousel from "./components/HeroCarousel";
import AboutSection from "./components/AboutSection";
import WelcomeSection from "./components/WelcomeSection";
import ServicesSection from "./components/ServicesSection";
import IndustriesSection from "./components/IndustriesSection";
import TeamSection from "./components/TeamSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Check if already loaded in this session
    const hasLoaded = sessionStorage.getItem('hasLoadedBefore');
    if (hasLoaded) {
      setShowContent(true);
    } else {
      // Wait for loading screen to finish
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 3500); // 3 seconds loading + 0.5s buffer
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <main className="min-h-screen bg-background selection:bg-tac-purple selection:text-foreground">
      <LoadingScreen />
      <div style={{ opacity: showContent ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}>
        <Navbar />
        <HeroCarousel />
        <WelcomeSection />
        <AboutSection />
        <TeamSection />
        <ServicesSection />
        <IndustriesSection />
        <FinalCTA />
        <Footer />
      </div>
    </main>
  );
}
