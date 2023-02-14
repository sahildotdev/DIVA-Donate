import Link from "next/link";
import { useState } from "react";
import Modal from "../Layout/Modal";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export const CampaingCard = () => {
  const [isOpen, setOpen] = useState(false);

  const handleDropDown = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="container pt-[5rem] sm:pt-[8rem] md:pt-[8rem] justify-center mx-auto px-4">
      <div className="grid px-4 py-8 mx-auto gap-auto lg:py-16 lg:grid-cols-12">
        <div className="mx-auto lg:mt-0 lg:col-span-5 lg:flex">
          <div className="max-w-xl sm-bg-auto bg-cover bg-center bg-no-repeat rounded-[2rem] bg-[url('/Images/pastrolists400pxVertical.png')] rounded-lg ">
            <div className="p-8 relative top-[28rem] text-[#DEEFE7] ">
              <h5 className="font-semibold text-4xl font-['lora']">
                Fortune DIVA
              </h5>
              <p className="card-text">
                A conditional donation compaign to provide insurance to farmers
                against damage caused by insufficient rain in Africa. This
                campaign aims to support more than 150 farmers across Africa.
              </p>
              <span className="inline-block text-lg text-[#DBF227] align-middle">
                Expiry: 31 December 2022, 8pm UTC
              </span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className=" flex flex-col py-12">
            <div className="max-w-xl mx-auto mb-10 bg-[#FFFFFF] border border-gray-200 rounded-[16px] drop-shadow-xl ">
              <div className="justify-evenly p-[60px] ">
                <div className="mb-10">
                  <p className="mb-3 font-normal font-['Open_Sans'] text-base text-center text-[#042940]">
                    Thank you for getting involved in providing insurance to
                    farmers against damage caused by insufficient rain in
                    Africa.
                  </p>
                </div>

                <div className="mb-10 w-full bg-[#D6D58E] rounded-[10px]">
                  <div className="bg-[#005C53] text-xs w-[45%] font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full">
                    {" "}
                    45%
                  </div>
                </div>

                <div className="grid grid-cols-3 text-center divide-x-[1px] divide-[#005C53] mb-10">
                  <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 font-medium text-xl text-[#042940]">
                      Goal
                    </dt>
                    <dd className="font-normal text-base text-[#042940] ">
                      $15,000
                    </dd>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 font-medium text-xl text-[#042940]">
                      Raised
                    </dt>
                    <dd className="font-normal text-base text-[#042940] ">
                      $6,750
                    </dd>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 font-medium text-xl text-[#042940]">
                      To go
                    </dt>
                    <dd className="font-normal text-base text-[#042940] ">
                      $8,250
                    </dd>
                  </div>
                </div>
                <div className="mb-3">
                  <p className="font-semibold text-2xl font-['lora'] text-left text-[#042940]">
                    Enter donation amount
                  </p>
                </div>

                <div>
                  <form>
                    <label className="mb-2 text-sm font-medium text-gray-900 sr-only">
                      Search
                    </label>
                    <div className="relative w-full mr-3">
                      <input
                        type="search"
                        id="search"
                        placeholder="Amount"
                        className="block w-full p-4 pl-10 text-lg border border-[#042940] focus:outline-none text-gray-900 rounded-[10px] bg-[rgba(4, 41, 64, 0.24)]"
                        required
                      />
                      <div className="absolute right-2 bottom-2.5 inline-flex ">
                        <ConnectButton />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="mb-3">
                  {/*<Link href={}>*/}
                  <p className="font-normal text-base font-['Open_Sans'] text-right text-[#042940]">
                    Available balance
                  </p>
                  {/*</Link>*/}
                </div>
                <div>
                  <Modal />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
