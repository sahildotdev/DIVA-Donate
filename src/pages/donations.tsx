import Navbar from "../components/Layout/Navbar";
import { CampaingCard } from "../components/Section/CampaingCard";
import { AboutSection } from "../components/Section/AboutSection";
import { FooterSection } from "../components/Section/FooterSection";
import { DonationSection } from "../components/Section/DonationSection";
import { LinkSection } from "../components/Section/LinkSection";
import Donations from "../components/Section/Donations";

export default function Campaign() {
    return (
        <main className="h-full w-full relative">
            <nav>
                <Navbar />
                <div className="justify-center yx-auto pt-[5rem] pb-[15rem] bg-[#F3FDF8]">
                    <Donations />
                </div>
                <FooterSection />
            </nav>
        </main>
    );
}
