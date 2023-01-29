import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Logo } from "../Logo";

export default function HeroSection() {
  return (
    <section className="bg-[#F3FDF8]">
      <div className="container pt-[5rem] sm:pt-[8rem] md:pt-[8rem] flex flex-col justify-center mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-4xl font-bold text-[#042940] font-['lora'] tracking-tight sm:text-6xl">
            Event-Driven
            <br /> Conditional
            <br /> Donations
          </h1>
          <p className="mt-6 text-lg font-['Open Sans'] leading-8 text-[#005C53] ">
            A novel donation model enabled by blockchain technology
            <br />
            <p className="font-['Open Sans'] text-[#042940]">
              Powered by DIVA Protocol
            </p>
          </p>

          <div className="flex flex-col mt-6 space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              href="#"
              className="inline-block font-['Open Sans'] rounded-lg bg-[#042940] px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm"
            >
              Donate
              <span className="#042940" aria-hidden="true">
                &rarr;
              </span>
            </a>
            <a
              href="#"
              className="inline-block font-['Open Sans']  rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-[#042940] ring-1 ring-[#042940]"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0">
          <div>
            <Image
              className="object-contain"
              width="800"
              height="800"
              src="/Images/landing-illustration.png"
              alt="Modern building architecture"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
