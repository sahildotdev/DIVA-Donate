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

  return (
    <nav className="z-10 px-2 sm:px-4 py-2.5 fixed z-20 w-full top-0 left-0 bg-[#F3FDF8] border-b-2 border-[#D6D58E]">
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
                    <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
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
              <ConnectButton accountStatus="avatar" />
            </div>
          </div>
        </div>
        <div className="hidden space-x-2 md:hidden lg:inline-block">
          <ConnectButton accountStatus="avatar" />
        </div>
      </div>
    </nav>
  );
}
