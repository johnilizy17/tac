import Navbar from "./components/Navbar";
import Hero3D from "./components/Hero3D";
import AboutSection from "./components/AboutSection";
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
      <Hero3D />
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
