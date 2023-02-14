import { InfoCard } from "../InfoCard";

export const InfoSection = () => (
  <div className="container flex flex-wrap mx-auto py-10 flex-row items-center justify-center lg:justify-between">
    <InfoCard
      cardWidth="max-w-lg"
      cardHeight="h-[560px]"
      title="Increasing effectiveness via event-driven conditional donations"
      paragraph="Escrow-based, event-driven and automatically enforceable agreements offer donors a 
        tailored experience and a perception of control as compared to direct donations"
      paragraphColor="text-[#DEEFE7]"
      titleSize="text-4xl"
      titleColor="text-[#D6D58E]"
      cardColor="bg-[#005C53]"
    />

    <div className="max-w-full grid gap-14 grid-rows-3 lg:w-1/2 ">
      <InfoCard
        cardWidth="lg:w-full md:w-full"
        cardHeight=""
        title="Targeted"
        paragraph="Donations are released when beneficiaries are in actual need"
        paragraphColor="text-[#042940]"
        titleSize="text-4xl"
        titleColor="text-[#042940]"
        cardColor="bg-[#9FC131]"
      />

      <InfoCard
        cardWidth="lg:w-full"
        cardHeight=""
        title="Parametric"
        paragraph="The underlying event is measurable and its verification is detached from any potential external bias"
        paragraphColor="text-[#042940]"
        titleSize="text-4xl"
        titleColor="text-[#042940]"
        cardColor="bg-[#9FC131]"
      />

      <InfoCard
        cardWidth="lg:w-full"
        cardHeight=""
        title="Pro-active"
        paragraph="Reduces delays in fund release as available resources have been deposited in advance"
        paragraphColor="text-[#042940]"
        titleSize="text-4xl"
        titleColor="text-[#042940]"
        cardColor="bg-[#9FC131]"
      />
    </div>
  </div>
);
