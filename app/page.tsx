import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import AboutSection from "./components/AboutSection";
import Philosophy from "./components/Philosophy";
import RampSection from "./components/RampSection";
import BentoServices from "./components/BentoServices";
import IndustriesSection from "./components/IndustriesSection";
import TeamSection from "./components/TeamSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import AvatarMarquee from "./components/AvatarMarquee";

export default function Home() {
  return (
    <main className="min-h-screen bg-tac-dark selection:bg-tac-brand selection:text-white">
      <LoadingScreen />
      <Navbar />
      <HeroBanner />
      <AvatarMarquee />
      <div className="relative z-10">
        <AboutSection />
        <Philosophy />
        <RampSection />
        <BentoServices />
        <IndustriesSection />
        <TeamSection />
        <FinalCTA />
      </div>
      <Footer />
    </main>
  );
}
