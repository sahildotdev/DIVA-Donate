import { InfoCard } from "../InfoCard";
import Image from "next/image";

export const FeatureSection = () => (
  <div className="container mx-auto pb-10 flex flex-row">
    <div className="flex flex-col w-[60%] justify-evenly">
      <div className="px-6">
        <div className="font-semibold font-['lora'] text-5xl text-[#042940] mb-2">
          Increasing efficiency <br /> and transparency via <br />
          smart contract technology
        </div>
        <p className="font-normal font-['Open_Sans'] text-[#042940] text-base">
          Smart contracts offer a highly efficient, trustless and transparent
          way to <br /> manage donation collections
        </p>
      </div>
      <div className="grid gap-5 grid-rows-2">
        <InfoCard
          cardWidth="w-80"
          cardHeight=""
          title="Transparent"
          paragraph="Donation flows are transparent and auditable on the blockchain"
          paragraphColor="text-[#042940]"
          titleSize="text-4xl"
          titleColor="text-[#042940]"
          cardColor="bg-[#9FC131]"
        />
        <div className="grid gap-4 grid-cols-2 w-[80%] ">
          <InfoCard
            cardWidth="w-80"
            cardHeight=""
            title="Trustless"
            paragraph="Funds are held in an programmatic escrow eliminating the risk of misuse and fraud"
            paragraphColor="text-[#042940]"
            titleSize="text-4xl"
            titleColor="text-[#042940]"
            cardColor="bg-[#9FC131]"
          />
          <InfoCard
            cardWidth="w-80"
            title="Efficient"
            cardHeight=""
            paragraph="Programmatically enforced rules remove the need for manual processes"
            paragraphColor="text-[#042940]"
            titleSize="text-4xl"
            titleColor="text-[#042940]"
            cardColor="bg-[#9FC131]"
          />
        </div>
      </div>
    </div>
    <div className="w-[50%] flex">
      <Image
        className="object-contain"
        width="800"
        height="800"
        src="/Images/feature.png"
        alt="Modern building architecture"
      />
    </div>
  </div>
);
