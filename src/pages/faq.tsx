import Navbar from "../components/Layout/Navbar";
import { FooterSection } from "../components/Section/FooterSection";
import FAQContent from "../components/Section/FAQContent";
import Layout from "../components/Layout/Layout";

export default function Faq() {
    return (
        <main className="relative">
            <nav>
                <Layout>
                <div className="justify-center yx-auto pt-[10rem] pb-[21rem] bg-[#F3FDF8]">
                    <FAQContent />
                </div>
                </Layout>
            </nav>
        </main>
    );
}
