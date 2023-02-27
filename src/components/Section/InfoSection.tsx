import Image from "next/image";
import { InfoCard } from "../InfoCard";

export const InfoSection = () => (
  <section className="pt-[9rem] ">
    <div className="mx-auto max-w-7xl  px-4 sm:px-6 text-center lg:items-center lg:justify-between">
      <h1 className="font-lora font-semibold text-[30px] md:text-[60px] leading-[76.8px] text-[#042940]">
        Why conditional donations?
      </h1>
      <p className="font-semibold font-openSans text-[15px] md:text-[20px] mt-6 text-[#005C53] ">
        Increasing effectiveness
      </p>
      <hr className="w-[15rem] md:w-[25rem] h-[8px] mx-auto bg-[#9FC131] border-0 rounded-[20px] mt-6" />
    </div>
    <div className="container mt-10 flex flex-col lg:flex-row justify-center md:justify-around mx-auto p-6 ">
      <Image
        className="w-[520px] h-[560px]"
        width="520"
        height="560"
        src="/Images/ConditionalDonationimg.png"
        alt="Conditional Donation"
      />

      <div className="grid gap-5 lg:gap-[34px] grid-rows-3 pt-7 lg:pt-0">
        <InfoCard
          cardPadding="p-4 md:p-8"
          cardWidth="w-auto md:w-full"
          cardRadius="20px"
          title="Targeted"
          paragraph="Donations are released when beneficiaries are in actual need"
          paragraphColor="text-[#042940]"
          titleSize="text-[23px] md:text-[46px]"
          paragraphSize="text-sm md:text-base"
          titleColor="text-[#042940]"
          cardColor="bg-[#DEEFE7]"
        />

        <InfoCard
          cardPadding="p-4 md:p-8"
          cardWidth="w-auto md:w-full"
          cardRadius="20px"
          title="Parametric"
          paragraph="The underlying event is measurable and its verification is detached from any potential external bias"
          paragraphColor="text-[#042940]"
          titleSize="text-3xl md:text-5xl"
          paragraphSize="text-sm md:text-base"
          titleColor="text-[#042940]"
          cardColor="bg-[#DEEFE7]"
        />

        <InfoCard
          cardPadding="p-4 md:p-8"
          cardWidth="w-auto md:w-full"
          cardRadius="20px"
          title="Pro-active"
          paragraph="Reduces delays in fund release as available resources have been deposited in advance"
          paragraphColor="text-[#042940]"
          titleSize="text-3xl md:text-5xl"
          paragraphSize="text-sm md:text-base"
          titleColor="text-[#042940]"
          cardColor="bg-[#DEEFE7]"
        />
      </div>
    </div>
  </section>
);
