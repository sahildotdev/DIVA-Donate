import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-[#F3FDF8]">
      <div className="container pt-[5rem] p-6 sm:pt-[8rem] md:pt-[8rem] flex flex-col justify-center mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center text-center rounded-sm lg:text-left">
          <h1 className="text-[40px] md:text-[80px] font-semibold text-[#042940] font-lora">
            Event-Driven
            <br /> Conditional
            <br /> Donations
          </h1>
          <p className="mt-6 font-openSans text-[15px] md:text-[20px] font-semibold text-[#005C53] ">
            A novel donation model enabled by blockchain technology
            <br />
            <p className="font-openSans text-[15px] md:text-[20px] font-light text-[#042940]">
              Powered by DIVA Protocol
            </p>
          </p>

          <div className="flex flex-col mt-6 space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <button className="font-['Open Sans'] rounded-lg bg-[#042940] justify-center text-white font-bold py-2 px-4 rounded inline-flex items-center">
              <Image
                className="mr-3"
                width="24"
                height="24"
                src="/Images/donate-light-icon.svg"
                alt="donate-light-icon"
              />
              <span className="font-openSans">Donate</span>
            </button>
            <Link href="">
              <button className="inline-block font-openSans rounded-lg px-4 py-1.5 text-base font-semibold text-[#042940] ring-1 ring-[#042940]">
                Learn More
              </button>
            </Link>
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
