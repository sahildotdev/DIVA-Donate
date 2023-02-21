import { InfoCard } from "../InfoCard";
import Image from "next/image";

export const FeatureSection = () => (
  <div className="container mx-auto p-6 justify-center items-center flex flex-col lg:flex-row">
    <div className="flex flex-col w-[100%] lg:w-[60%] justify-evenly">
      <div className="mb-10">
        <div className="font-semibold w-[100%] lg:w-[80%] font-lora text-[23px] md:text-[46px] text-[#042940] mb-2">
          Increasing efficiency <br />
          and transparency via smart contract technology
        </div>
        <p className="font-normal font-openSans text-[#042940] text-sm md:text-base ">
          Smart contracts offer a highly efficient, trustless and transparent
          way to <br /> manage donation collections
        </p>
      </div>
      <div className="grid gap-8 grid-cols-1 lg:grid-rows-2">
        <InfoCard
          cardWidth="w-auto lg:w-[372px]"
          cardRadius="20px"
          cardPadding="p-8"
          title="Transparent"
          paragraph="Donation flows are transparent and auditable on the blockchain"
          paragraphColor="text-[#042940]"
          titleSize="text-[23px] md:text-[46px]"
          paragraphSize="text-sm md:text-base"
          titleColor="text-[#005C53]"
          cardColor="bg-[#DEEFE7]"
        />
        <div className="grid gap-6 lg:gap-0 grid-cols-1 lg:grid-cols-2">
          <InfoCard
            cardWidth="w-auto lg:w-[372px]"
            cardRadius="20px"
            cardPadding="p-8"
            title="Trustless"
            paragraph="Funds are held in an programmatic escrow eliminating the risk of misuse and fraud"
            paragraphColor="text-[#042940]"
            titleSize="text-[23px] md:text-[46px]"
            paragraphSize="text-sm md:text-base"
            titleColor="text-[#005C53]"
            cardColor="bg-[#DEEFE7]"
          />
          <InfoCard
            cardWidth="w-auto lg:w-[372px]"
            cardRadius="20px"
            cardPadding="p-8"
            title="Efficient"
            paragraph="Programmatically enforced rules remove the need for manual processes"
            paragraphColor="text-[#042940]"
            titleSize="text-[23px] md:text-[46px]"
            paragraphSize="text-sm md:text-base"
            titleColor="text-[#005C53]"
            cardColor="bg-[#DEEFE7]"
          />
        </div>
      </div>
    </div>
    <div className="w-[50%] flex items-center justify-center p-6 mt-8 lg:mt-0">
      <Image
        className=""
        width="517"
        height="630"
        src="/Images/feature.png"
        alt="Modern building architecture"
      />
    </div>
  </div>
);
