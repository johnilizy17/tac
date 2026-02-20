import Navbar from "./components/Navbar";
import HeroCarousel from "./components/HeroCarousel";
import AboutSection from "./components/AboutSection";
import WelcomeSection from "./components/WelcomeSection";
import Philosophy from "./components/Philosophy";
import RampSection from "./components/RampSection";
import ServicesSection from "./components/ServicesSection";
import IndustriesSection from "./components/IndustriesSection";
import TeamSection from "./components/TeamSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";

export default function Home() {
  return (
    <main className="min-h-screen bg-tac-dark selection:bg-tac-purple selection:text-white">
      <LoadingScreen />
      <Navbar />
      <HeroCarousel />
      <WelcomeSection />
      <AboutSection />
      <Philosophy />
      {/* <RampSection /> */}
      <ServicesSection />
      <IndustriesSection />
      <TeamSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
