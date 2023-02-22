import Link from "next/link";

export const MydonationSection = () => (
  <section>
    <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 text-center lg:items-center lg:justify-between">
        <h1 className="font-semibold text-6xl leading-[4.75rem] text-[#042940]">
          My Donations
        </h1>

        <hr className="w-48 h-[8px] mx-auto bg-[#9FC131] border-0 rounded-[20px] my-2" />
      </div>
      <div className=" mb-10 p-5 text-center">
        <h5 className="mb-2 text-2xl font-bold text-gray-900 text-[#042940]">
          More campaigns coming soon!
        </h5>
        <p className="mb-3 font-normal text-[#000000]">
          Get in touch with us to list your campaign
        </p>
        <Link href="">
          <button className="inline-block font-openSans rounded-lg px-4 py-1.5 text-base font-semibold text-[#042940] ring-1 ring-[#042940]">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  </section>
);
