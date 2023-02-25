import { InfoCard } from "../InfoCard";
import Image from "next/image";

export const AboutSection = () => (
  <section>
    <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
      <div className="relative border-spacing-5 flex-col justify-center p-6 sm:text-left rounded-sm lg:max-w-lg xl:max-w-xl lg:text-left">
        <div className="lg:col-span-7">
          <h1 className="font-semibold text-4xl sm:text-6xl md:text-6l lg:text-4xl xl:text-5xl text-[#042940] font-['lora'] mb-8">
            About the campaign
          </h1>
          <ul className="list-none font-[Open Sans] text-base font-normal mb-8 ">
            <li>
              {" "}
              The campaign is a collaborative effort between Fortune Connect and
              DIVA Technologies AG using DIVA Protocol as the underlying smart
              contract technology.
            </li>{" "}
            <li>
              This product will benefit farmers (pastoralists) in the Eastern
              Horn of Africa in case of extreme drought as measured by the NDVI.
            </li>
          </ul>

          <h1 className="font-semibold text-2xl font-['lora'] text-[#042940] m-auto leading-normal mb-2">
            Campaign goal
          </h1>
          <ul
            role="list"
            className="list-disc marker:text-[#000000] list-disc pl-5 space-y-3  mb-8"
          >
            <li>100 Pastoralists in Kenya</li>
            <li>
              $150 target cover donation for 1 livestock unit per pastoralist
            </li>
            <li>$15’000 total cover for the campaign</li>
          </ul>
          <div className="font-semibold text-2xl font-['lora'] text-[#042940] m-auto leading-normal mb-2">
            Beneficiaries
          </div>
          <ul
            role="list"
            className="list-disc marker:text-[#000000] list-disc pl-5 space-y-3  mb-8"
          >
            <li>Pastoralists in Kenya</li>
          </ul>
          <div className="font-semibold text-2xl font-['lora'] text-[#042940] m-auto leading-normal mb-2">
            Trigger event
          </div>
          <ul className="list-disc mb-8">
            NDVI which stands for Normalized Difference Vegetation Index and is
            the most used metric to measure vegetation. The NDVI serves as a
            proxy for livestock death. The lower the value, the higher the
            likelihood of livestock death.{" "}
            <a
              href="#"
              className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700"
            >
              Learn more
            </a>
          </ul>
          <div className="font-semibold text-2xl font-['lora'] text-[#042940] m-auto leading-normal mb-2">
            Donation scenarios
          </div>
          <ul
            role="list"
            className="list-disc marker:text-[#000000] list-disc pl-5 space-y-3  mb-2"
          >
            <li>
              {" "}
              <a className="font-bold" target="_blank">
                15,000 USDT{" "}
              </a>
              if NDVI is
              <span>&#8924;</span> 0.5
            </li>
            <li>
              <a className="font-bold" target="_blank">
                7,500 USDT{" "}
              </a>{" "}
              if NDVI is 0.625
            </li>
            <li>
              <a className="font-bold" target="_blank">
                0 USDT{" "}
              </a>{" "}
              if NDVI is <span>&#8925;</span> 0.75
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center mt-8 lg:mt-0 h-full">
        <Image
          className="object-contain h-full"
          width="800"
          height="800"
          src="/Images/CampingImage.png"
          alt="Modern building architecture"
        />
      </div>
    </div>
  </section>
);
