import Navbar from "../components/Layout/Navbar";
import HeroSection from "../components/Section/HeroSection";
import { InfoSection } from "../components/Section/InfoSection";
import { FeatureSection } from "../components/Section/FeatureSection";
import { CampaignSection } from "../components/Section/CampaignSection";
import { WorkSection } from "../components/Section/WorkSection";
import { FooterSection } from "../components/Section/FooterSection";

export default function Home() {
  return (
    <main className="h-full w-full relative">
      <nav>
        <div className="border-b-2 border-[#D6D58E]">
          <Navbar />
        </div>
        <HeroSection />
        <InfoSection />
        <FeatureSection />
        <CampaignSection />
        <WorkSection />
        <FooterSection />
      </nav>
    </main>
  );
}
