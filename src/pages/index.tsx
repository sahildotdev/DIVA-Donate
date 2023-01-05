import HeroSection from "../components/Section/HeroSection";
import { InfoSection } from "../components/Section/InfoSection";
import { FeatureSection } from "../components/Section/FeatureSection";

export default function Home() {
  return (
    <main className="h-full w-full relative bg-blue-200 ">
      <nav>
        <HeroSection />
        <InfoSection />
        <FeatureSection />
      </nav>
    </main>
  );
}
