import { InfoCard } from "../InfoCard";

export const InfoSection = () => (
  <div className="px-6 py-12 lg:my-12 md:px-12 text-center lg:text-left">
    <div className="container mx-auto xl:px-32">
      <div className="grid lg:grid-cols-2 items-center ">
        <div className="items-center">
          <InfoCard
            cardWidth="w-[32rem]"
            cardHeight="h-[35rem]"
            title="Increasing effectiveness via event-driven conditional donations"
            paragraph="Escrow-based, event-driven and automatically enforceable agreements offer donors a 
        tailored experience and a perception of control as compared to direct donations"
            paragraphColor="text-[#DEEFE7]"
            titleSize="text-4xl"
            titleColor="text-[#D6D58E]"
            cardColor="bg-[#005C53]"
          />
        </div>
        <div className="my-10">
          <InfoCard
            cardWidth="w-[40rem]"
            cardHeight="h-42"
            title="Targeted"
            paragraph="Donations are released when beneficiaries are in actual need"
            paragraphColor="text-[#042940]"
            titleSize="text-4xl"
            titleColor="text-[#042940]"
            cardColor="bg-[#9FC131]"
          />

          <InfoCard
            cardWidth="w-[40rem]"
            cardHeight="h-42"
            title="Parametric"
            paragraph="The underlying event is measurable and its verification is detached from any potential external bias"
            paragraphColor="text-[#042940]"
            titleSize="text-4xl"
            titleColor="text-[#042940]"
            cardColor="bg-[#9FC131]"
          />

          <InfoCard
            cardWidth="w-[40rem]"
            cardHeight="h-42"
            title="Pro-active"
            paragraph="Reduces delays in fund release as available resources have been deposited in advance"
            paragraphColor="text-[#042940]"
            titleSize="text-4xl"
            titleColor="text-[#042940]"
            cardColor="bg-[#9FC131]"
          />
        </div>
      </div>
    </div>
  </div>
);
