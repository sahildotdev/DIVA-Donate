import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Logo } from "../Logo";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Campaigns", href: "#" },
  { name: "My Donations", href: "#" },
  { name: "My Campaigns", href: "#" },
  { name: "FAQs", href: "#" },
];

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="isolate bg-white">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="px-6 pt-6 lg:px-8">
        <div>
          <nav
            className="flex h-9 items-center justify-between"
            aria-label="Global"
          >
            <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Logo />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <FaBars className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-2 lg:justify-center lg:gap-x-12">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-semibold text-gray-900  hover:text-gray-900"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
              <a
                href="#"
                className="inline-block rounded-lg bg-indigo-600 #042940 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
              >
                Connect Wallet
              </a>
            </div>
          </nav>
        </div>
      </div>
      <main>
        <div className="flex">
          <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:items-center lg:justify-between lg:py-16 lg:px-8">
            <h1 className="text-4xl font-bold text-[#042940] font-lora tracking-tight  sm:text-left sm:text-6xl">
              Event-Driven
              <br /> Conditional
              <br /> Donations
            </h1>
            <p className="mt-6 text-lg sm:text-left leading-8 text-[#005C53] ">
              A novel donation model enabled by blockchain technology
              <br />
              <p className="text-[#042940]">Powered by DIVA Protocol</p>
            </p>

            <div className="mt-8 flex gap-x-4 sm:text-left">
              <a
                href="#"
                className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
              >
                Donate
                <span className="#042940" aria-hidden="true">
                  &rarr;
                </span>
              </a>
              <a
                href="#"
                className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
              >
                Learn More
                <span className="text-gray-400" aria-hidden="true">
                  &rarr;
                </span>
              </a>
            </div>
          </div>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div>
              <Image
                className="w-full"
                width="800"
                height="800"
                src="/Images/landing-illustration.png"
                alt="Modern building architecture"
              />
            </div>
          </div>
        </div>
        {/* <div className="relative bg-red-50 px-6 lg:px-8">
          <div className=" mx-auto max-w-7xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div>
              <h1 className="text-4xl font-bold text-[#042940] font-lora tracking-tight  sm:text-left sm:text-6xl">
                Event-Driven
                <br /> Conditional
                <br /> Donations
              </h1>
              <p className="mt-6 text-lg sm:text-left leading-8 text-[#005C53] ">
                A novel donation model enabled by blockchain technology
                <br />
                <p className="text-[#042940]">Powered by DIVA Protocol</p>
              </p>

              <div className="mt-8 flex gap-x-4 sm:text-left">
                <a
                  href="#"
                  className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                >
                  Donate
                  <span className="#042940" aria-hidden="true">
                    &rarr;
                  </span>
                </a>
                <a
                  href="#"
                  className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                >
                  Learn More
                  <span className="text-gray-400" aria-hidden="true">
                    &rarr;
                  </span>
                </a>
              </div>
            </div>
            <div className=" columns-2 mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="object-cover h-48 w-96 md:shrink-0 w-96">
                <Image
                  className="h-48 w-full"
                  width="200"
                  height="100"
                  src="/Images/landing illustration.png"
                  alt="Modern building architecture"
                />
              </div>
            </div>
          </div>
        </div> */}
      </main>
    </div>
  );
}
