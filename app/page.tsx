import Navbar from "./components/Navbar";
import HeroCarousel from "./components/HeroCarousel";
import AboutSection from "./components/AboutSection";
import WelcomeSection from "./components/WelcomeSection";
import ExperienceSection from "./components/ExperienceSection";
import ServicesSection from "./components/ServicesSection";
import IndustriesSection from "./components/IndustriesSection";
import TeamSection from "./components/TeamSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-tac-purple selection:text-foreground">
      <LoadingScreen />
      <Navbar />
      <HeroCarousel />
      <WelcomeSection />
      <AboutSection />
      <TeamSection />
     
      <ServicesSection />
      <IndustriesSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
