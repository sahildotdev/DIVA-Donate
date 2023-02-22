<<<<<<< Updated upstream
import { Logo } from "../components/Logo";

export default function Home() {
  return (
    <main className="h-full w-full relative bg-blue-200 ">
      <nav>
        <Logo />
      </nav>
=======
import Layout from "../components/Layout/Layout";
import HeroSection from "../components/Section/HeroSection";
import { InfoSection } from "../components/Section/InfoSection";
import { FeatureSection } from "../components/Section/FeatureSection";
import { CampaignSection } from "../components/Section/CampaignSection";
import { WorkSection } from "../components/Section/WorkSection";

export default function Home() {
  return (
    <main className="h-full w-full relative">
      <Layout>
        <HeroSection />
        <InfoSection />
        <FeatureSection />
        <CampaignSection />
        <WorkSection />
      </Layout>
>>>>>>> Stashed changes
    </main>
  );
}
