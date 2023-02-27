import React from "react";
import Link from "next/link";

type NavbarLinksProps = {
  activePath: string;
};

const links = [
  {
    to: "/",
    name: "Home",
  },
  {
    to: "/campaign",
    name: "Campaigns",
  },
  {
    to: "/donations",
    name: "My Donations",
  },
  // {
  //   to: "",
  //   name: "My Campaigns",
  // },
  {
    to: "/faq",
    name: "FAQs",
  },
];

export const NavbarLinks = ({ activePath }: NavbarLinksProps) => {
  return (
    <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
      {links.map((link) => (
        <li key={link.name}>
          <Link
            href={link.to}
            className={`block py-2 pl-3 pr-4 text-base font-semibold  ${
              activePath === link.to ? "text-[#9FC131] " : "text-[#042940]"
            } rounded md:p-0`}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
