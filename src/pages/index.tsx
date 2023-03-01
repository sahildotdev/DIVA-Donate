import Layout from "../components/Layout/Layout";
import HeroSection from "../components/Section/HeroSection";
import { InfoSection } from "../components/Section/InfoSection";
import { FeatureSection } from "../components/Section/FeatureSection";
import { CampaignSection } from "../components/Section/CampaignSection";
import { WorkSection } from "../components/Section/WorkSection";
import {InfoCard} from "../components/InfoCard";
import {FooterSection} from "../components/Section/FooterSection";

export default function Home() {
  return (
    <main className="h-full w-full relative">
          <div className="invisible sm:visible sm:">
              <Layout>
                <HeroSection />
                <InfoSection />
                <FeatureSection />
                <CampaignSection />
                <WorkSection />
              </Layout>
          </div>
          <div className="justify-center items-center -mt-[320rem] items-center sm:invisible sm:hidden">
              <InfoCard
                  cardPadding="p-4 md:p-8"
                  cardWidth="w-auto md:w-full"
                  cardRadius="20px"
                  title="In progress..."
                  paragraph="Mobile support is currently in progress. Please check back soon!"
                  paragraphColor="text-[#042940]"
                  titleSize="text-[23px] md:text-[46px]"
                  paragraphSize="text-sm md:text-base"
                  titleColor="text-[#042940]"
                  cardColor="bg-[#DEEFE7]"
              />
          </div>
    </main>
  );
}
