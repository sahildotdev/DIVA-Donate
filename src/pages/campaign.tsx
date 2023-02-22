import Layout from "../components/Layout/Layout";
import { CampaingCard } from "../components/Section/CampaingCard";
import { AboutSection } from "../components/Section/AboutSection";
import { FooterSection } from "../components/Layout/FooterSection";
import { DonationSection } from "../components/Section/DonationSection";
import { LinkSection } from "../components/Section/LinkSection";

export default function Campaign() {
  return (
    <main className="h-full w-full relative">
      <Layout>
        <div className="bg-[#F3FDF8]">
          <CampaingCard />
        </div>
        <AboutSection />
        <DonationSection />
        <LinkSection />

        <FooterSection />
      </Layout>
    </main>
  );
}
