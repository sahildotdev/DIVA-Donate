import Navbar from "../components/Layout/Navbar";
import { FooterSection } from "../components/Section/FooterSection";
import FAQContent from "../components/Section/FAQContent";

export default function Faq() {
    return (
        <main className="absolute">
            <nav>
                <Navbar />
                <div className="justify-center yx-auto pt-[5rem] pb-[15rem] bg-[#F3FDF8]">
                    <FAQContent />
                </div>
                <FooterSection />
            </nav>
        </main>
    );
}
