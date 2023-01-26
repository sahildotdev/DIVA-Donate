import { InfoCard } from "../InfoCard";
import Image from "next/image";

export const FeatureSection = () => (
  <section className="bg-white ">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div className="mr-auto place-self-center lg:col-span-7">
        <div className="font-semibold text-4xl text-[#042940] m-auto leading-normal mb-2">
          Increasing efficiency and transparency via smart contract technology
        </div>
        <p className="font-normal text-[#042940] align-middle m-auto  text-base leading-5">
          Smart contracts offer a highly efficient, trustless and transparent
          way to manage donation collections
        </p>
        <InfoCard
          cardWidth="w-[23rem]"
          title="Transparent"
          paragraph="Donation flows are transparent and auditable on the blockchain"
          paragraphColor="text-[#042940]"
          titleSize="text-4xl"
          titleColor="text-[#042940]"
          cardColor="bg-[#9FC131]"
        />
        <div className="grid lg:grid-cols-2 gap-10">
          <InfoCard
            cardWidth="w-[23rem]"
            title="Trustless"
            paragraph="Funds are held in an programmatic escrow eliminating the risk of misuse and fraud"
            paragraphColor="text-[#042940]"
            titleSize="text-4xl"
            titleColor="text-[#042940]"
            cardColor="bg-[#9FC131]"
          />

          <InfoCard
            cardWidth="w-[23rem]"
            title="Efficient"
            paragraph="Programmatically enforced rules remove the need for manual processes"
            paragraphColor="text-[#042940]"
            titleSize="text-4xl"
            titleColor="text-[#042940]"
            cardColor="bg-[#9FC131]"
          />
        </div>
      </div>
      <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <Image
          className="w-full"
          width="800"
          height="800"
          src="/Images/feature.png"
          alt="Modern building architecture"
        />
      </div>
    </div>
  </section>
);
