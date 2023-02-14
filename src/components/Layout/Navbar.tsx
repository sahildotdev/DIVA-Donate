import { Logo } from "../Logo";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { NavbarLinks } from "./NavbarLinks";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const { pathname } = useRouter();
  console.log("pathname:", pathname);

  return (
    <nav className="px-2 sm:px-4 py-2.5 fixed z-20 w-full top-0 left-0 bg-[#F3FDF8] border-b-2 border-[#D6D58E]">
      <div className="justify-between px-4 mx-auto lg:max-w-screen-2xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center outline-none justify-between py-3 md:py-5 md:block">
            <Link href="/">
              <Logo />
            </Link>
            <div className="md:hidden">
              <button
                className=" text-gray-700 rounded-md outline-none -my-1 ml-6 -mr-1 flex h-9 w-9 items-center justify-center lg:hidden"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    className="w-8 h-8"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <NavbarLinks activePath={pathname} />
            <div className="mt-3 space-y-2 lg:hidden md:inline-block">
              <ConnectButton />
              {/* <button
                type="button"
                data-modal-target="crypto-modal"
                className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  ></path>
                </svg>
                Connect wallet
              </button>*/}
            </div>
          </div>
        </div>
        <div className="hidden space-x-2 md:hidden lg:inline-block">
          <ConnectButton />
          {/*<a
            href="javascript:void(0)"
            className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
          >
            Connect Wallet
          </a>*/}
          {/* <button
            type="button"
            data-modal-target="crypto-modal"
            className="text-white bg-[#042940] rounded-md font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
          >
            <svg
              aria-hidden="true"
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              ></path>
            </svg>
            Connect wallet
          </button>*/}
        </div>
      </div>
    </nav>
  );
}
