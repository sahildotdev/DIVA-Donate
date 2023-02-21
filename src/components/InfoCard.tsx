import Image from "next/image";
import { useState } from "react";
//import { Dialog } from '@headlessui/react'
//import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { FaBars, FaTimes } from "react-icons/fa";
import { Logo } from "./Logo";

interface InfoCardProps {
  cardWidth: string;
  title: string;
  paragraph: string;
  paragraphColor: string;
  titleSize: string;
  paragraphSize?: string;
  titleColor: string;
  cardColor: string;
  cardPadding?: string;
  cardRadius: string;
  lineHeight?: string;
}

export const InfoCard = ({
  title,
  paragraph,
  paragraphColor,
  cardPadding,
  titleSize,
  paragraphSize,
  titleColor,
  cardColor,
  cardWidth,
  cardRadius,
  lineHeight,
}: InfoCardProps) => (
  <div
    className={`flex flex-col rounded-[${cardRadius}] shadow-lg bg-[#005C53] text-left ${cardPadding} ${cardWidth} ${cardColor}`}
  >
    <h5
      className={`font-semibold font-lora ${titleColor} ${titleSize} leading-[${lineHeight}]`}
    >
      {title}
    </h5>
    <p
      className={`font-normal font-openSans ${paragraphColor} ${paragraphSize}`}
    >
      {paragraph}
    </p>
  </div>
);
{
  /*<div className="flex justify-center">
    <div className="block p-10 rounded-lg shadow-lg bg-[#005C53] text-left">
      <div className="p-6">
        <h5 className="text-[#DEEFE7] text-4xl text-[#D6D58E] font-medium mb-4 font-['lora']">
          {title}
        </h5>

        <p className={`font-normal ${paragraphColor} text-base `}>
          {paragraph}
        </p>
      </div>
    </div>
  </div>*/
}
