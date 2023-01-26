import { InfoCard } from "../InfoCard";

export const InfoSection = () => (
  <div className=" container flex flex-col justify-center mx-auto sm:py-12 lg:flex-row lg:justify-between">
    <InfoCard
      cardWidth="w-[32rem]"
      title="Increasing effectiveness via event-driven conditional donations"
      paragraph="Escrow-based, event-driven and automatically enforceable agreements offer donors a 
        tailored experience and a perception of control as compared to direct donations"
      paragraphColor="text-[#DEEFE7]"
      titleSize="text-4xl"
      titleColor="text-[#D6D58E]"
      cardColor="bg-[#005C53]"
    />

    <div className="">
      <InfoCard
        cardWidth="w-[40rem]"
        title="Targeted"
        paragraph="Donations are released when beneficiaries are in actual need"
        paragraphColor="text-[#042940]"
        titleSize="text-4xl"
        titleColor="text-[#042940]"
        cardColor="bg-[#9FC131]"
      />

      <InfoCard
        cardWidth="w-[40rem]"
        title="Parametric"
        paragraph="The underlying event is measurable and its verification is detached from any potential external bias"
        paragraphColor="text-[#042940]"
        titleSize="text-4xl"
        titleColor="text-[#042940]"
        cardColor="bg-[#9FC131]"
      />

      <InfoCard
        cardWidth="w-[40rem]"
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
