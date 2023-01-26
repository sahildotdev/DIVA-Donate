import Image from "next/image";

export const DonationSection = () => {
  return (
    <div className="container mx-auto  px-4">
      <div className="mx-auto max-w-7xl py-4 px-4 sm:px-6 text-center lg:items-center lg:justify-between">
        <h1 className="font-semibold text-6xl leading-[4.75rem] text-[#042940]">
          Donation Details
        </h1>

        <hr className="w-[15rem] h-[8px] mx-auto bg-[#9FC131] border-0 rounded-[20px] my-2" />
      </div>

      <div className="grid px-4 py-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto lg:col-span-7">
          <div className="relative rounded-xl overflow-auto p-8">
            <div className="overflow-visible relative max-w-xl mx-auto shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 bg-[#DEEFE7] ">
              <Image
                className="absolute -left-8 w-24 h-24 rounded-full shadow-lg"
                src="/Images/rain.png"
                width={100}
                height={100}
                alt="Trigger metric"
              />
              <div className="flex flex-col text-4xl text-left py-2 pl-24">
                <strong className="text-[#005C53] font-semibold font-['lora']">
                  Trigger metric
                </strong>
                <span className="text-[#042940] text-xl font font-['Open_Sans'] ">
                  Average NDVI (1 Feb - 31 May 2023)
                </span>
              </div>
            </div>
          </div>
          <div className="relative rounded-xl overflow-auto p-8">
            <div className="overflow-visible relative max-w-xl mx-auto shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 bg-[#DEEFE7] ">
              <Image
                className="absolute -left-8 w-24 h-24 rounded-full shadow-lg"
                src="/Images/rain.png"
                width={100}
                height={100}
                alt="Trigger metric"
              />
              <div className="flex flex-col text-4xl text-left py-2 pl-24 pr-10">
                <strong className="text-[#005C53] font-semibold font-['lora']">
                  Trigger metric
                </strong>
                <span className="text-[#042940] text-xl font font-['Open_Sans'] ">
                  Average NDVI (1 Feb - 31 May 2023)
                </span>
              </div>
            </div>
          </div>
          <div className="relative rounded-xl overflow-auto p-8">
            <div className="overflow-visible relative max-w-xl mx-auto shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 bg-[#DEEFE7] ">
              <Image
                className="absolute -left-8 w-24 h-24 rounded-full shadow-lg"
                src="/Images/rain.png"
                width={100}
                height={100}
                alt="Trigger metric"
              />
              <div className="flex flex-col text-4xl text-left py-2 pl-24 pr-10">
                <strong className="text-[#005C53] font-semibold font-['lora']">
                  Trigger metric
                </strong>
                <span className="text-[#042940] text-xl font font-['Open_Sans'] ">
                  Average NDVI (1 Feb - 31 May 2023)
                </span>
              </div>
            </div>
          </div>
          <div className="relative rounded-xl overflow-auto p-8">
            <div className="overflow-visible relative max-w-xl mx-auto shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 bg-[#DEEFE7] ">
              <Image
                className="absolute -left-8 w-24 h-24 rounded-full shadow-lg"
                src="/Images/rain.png"
                width={100}
                height={100}
                alt="Trigger metric"
              />
              <div className="flex flex-col text-4xl text-left py-2 pl-24 pr-10">
                <strong className="text-[#005C53] font-semibold font-['lora']">
                  Trigger metric
                </strong>
                <span className="text-[#042940] text-xl font font-['Open_Sans'] ">
                  Average NDVI (1 Feb - 31 May 2023)
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:mt-0 lg:col-span-5 lg:flex">
          <Image
            className="w-full"
            width="800"
            height="800"
            src="/Images/Donationprofile.png"
            alt="Modern building architecture"
          />
        </div>
      </div>
    </div>
  );
};
