import Navbar from "../components/Layout/Navbar";
import { FooterSection } from "../components/Section/FooterSection";
import Donations from "../components/Section/Donations";
import Layout from "../components/Layout/Layout";

export default function DonationsPage() {
    return (
        <main className="h-full w-full relative">
            <nav>
                <Layout>
                <div className="justify-center yx-auto pt-[5rem] pb-[15rem] bg-[#F3FDF8]">
                    <Donations />
                </div>
                </Layout>
            </nav>
        </main>
    );
}
