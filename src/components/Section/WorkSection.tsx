import Image from "next/image";

export const WorkSection = () => (
  <div className="flex flex-col">
    <div className="mx-auto py-12 px-4 sm:px-6 text-center divide-y divide-slate-700">
      <h1 className="font-semibold text-6xl leading-[4.75rem]  text-[#042940]  ">
        How it works
      </h1>
    </div>
    <hr className="w-48 h-[8px] bg-[#9FC131] border-0 rounded-[20px] mx-auto" />
    <div className="bg-deep-purple-accent-700">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col mb-16 hidden sm:hidden md:hidden lg:block xl:block 2xl:block sm:mb-0">
          <Image
            width="1280"
            height="455"
            src="/Images/how-it-works-web.png"
            alt="Modern building architecture"
          />
        </div>
        <div className="sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden flex flex-col mb-16 sm:mb-0">
          <Image
            className="align-center justify-center"
            width="330"
            height="732"
            src="/Images/how-it-works-mobile.png"
            alt="Modern building architecture"
          />
        </div>
      </div>
    </div>
  </div>
);
