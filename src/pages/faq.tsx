import Navbar from "../components/Layout/Navbar";
import { FooterSection } from "../components/Section/FooterSection";
import FAQContent from "../components/Section/FAQContent";

export default function Faq() {
    return (
        <main className="relative">
            <nav>
                <Navbar />
                <div className="justify-center yx-auto pt-[10rem] pb-[21rem] bg-[#F3FDF8]">
                    <FAQContent />
                </div>
                <FooterSection />
            </nav>
        </main>
    );
}
