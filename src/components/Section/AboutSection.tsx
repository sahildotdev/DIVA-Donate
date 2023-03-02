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
              The campaign is a joint initiative by Fortune Connect, DIVA Technologies AG, 
              and Shamba Network aimed at providing financial assistance to pastoralists in 
              Kenya during droughts. The region regularly experiences droughts due to 
              climate change and extreme weather conditions, resulting in reduced 
              agricultural production, destroyed crops, and significant losses in livestock.
              {" "}<a
              href="https://www.divaprotocol.io/posts/diva-conditional-donations"
              className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700"
              target={'_blank'} rel="noreferrer"
            >
              Learn more
            </a>
            </li>{" "}
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
            Trigger metric
          </div>
          <ul className="list-disc mb-8">
            The Normalized Difference Vegetation Index (NDVI) is a commonly used metric to assess drought 
            conditions in an area by measuring vegetation density and health. It is calculated from satellite 
            images based on the near-infrared and red light reflectance of an area. Its values range from -1 to 1, 
            with higher values indicating healthier vegetation and lower values indicating drought stress.
            <br></br>
            <br></br>
            For this campaign, the average NDVI observed between 1st March and 31th May 2023 will be used and 
            reported by the Shamba oracle on 11th June to ensure full data coverage of the observation period. 
            The NDVI will be shifted by 1 for technical reasons.{" "}
            <a
              href="https://en.wikipedia.org/wiki/Normalized_difference_vegetation_index"
              className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700"
              target={'_blank'} rel="noreferrer"
            >
              Learn more
            </a>
          </ul>
          <div className="font-semibold text-2xl font-['lora'] text-[#042940] m-auto leading-normal mb-2">
            Donation scenarios
          </div>
          <p className="pb-4">The following percentages of the deposited USDT amount will be released depending on the reported metric:</p>
          <ul
            role="list"
            className="list-disc marker:text-[#000000] list-disc pl-5 space-y-3  mb-2"
          >
            <li>
              {" "}
              <a className="font-bold" target="_blank">
                100% {" "}
              </a>
              - if the trigger metric is at or below 1.200
            </li>
            <li>
              <a className="font-bold" target="_blank">
                50% {" "}
              </a>{" "}
              - if the trigger metric is at 1.215
            </li>
            <li>
              <a className="font-bold" target="_blank">
                0%{" "}
              </a>{" "}
              - if the trigger metric is at or above 1.230
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
