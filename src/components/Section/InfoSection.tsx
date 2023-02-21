import { InfoCard } from "../InfoCard";

export const InfoSection = () => (
  <section>
    <div className="container grid gap-2 md:gap-0 grid-rows-1 lg:grid-cols-2 mx-auto p-6 sm:py-12 lg:py-24">
      <InfoCard
        cardWidth="max-w-2xl"
        cardPadding="p-8 md:p-28"
        cardRadius="40px"
        title="Increasing effectiveness via event-driven conditional donations"
        paragraph="Escrow-based,event-driven and automatically enforceable agreements offer donors a 
        tailored experience and a perception of control as compared to direct donations"
        titleSize="text-[23px] md:text-[46px]"
        paragraphSize="text-sm md:text-base"
        titleColor="text-[#DEEFE7]"
        lineHeight="3.68rem"
        paragraphColor="text-[#D6D58E]"
        cardColor="bg-[#005C53]"
      />

      <div className="grid gap-7 lg:gap-14 grid-rows-3 pt-7 lg:pt-0">
        <InfoCard
          cardPadding="p-8"
          cardWidth="w-full"
          cardRadius="20px"
          title="Targeted"
          paragraph="Donations are released when beneficiaries are in actual need"
          paragraphColor="text-[#042940]"
          titleSize="text-[23px] md:text-[46px]"
          paragraphSize="text-sm md:text-base"
          titleColor="text-[#042940]"
          cardColor="bg-[#9FC131]"
        />

        <InfoCard
          cardPadding="p-8"
          cardWidth="w-auto md:w-full"
          cardRadius="20px"
          title="Parametric"
          paragraph="The underlying event is measurable and its verification is detached from any potential external bias"
          paragraphColor="text-[#042940]"
          titleSize="text-3xl md:text-5xl"
          paragraphSize="text-sm md:text-base"
          titleColor="text-[#042940]"
          cardColor="bg-[#9FC131]"
        />

        <InfoCard
          cardPadding="p-8"
          cardWidth="w-full"
          cardRadius="20px"
          title="Pro-active"
          paragraph="Reduces delays in fund release as available resources have been deposited in advance"
          paragraphColor="text-[#042940]"
          titleSize="text-3xl md:text-5xl"
          paragraphSize="text-sm md:text-base"
          titleColor="text-[#042940]"
          cardColor="bg-[#9FC131]"
        />
      </div>
    </div>
  </section>
);
