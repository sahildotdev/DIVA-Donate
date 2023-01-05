import Image from "next/image";
import { useState } from "react";
//import { Dialog } from '@headlessui/react'
//import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { FaBars, FaTimes } from "react-icons/fa";
import { Logo } from "./Logo";

interface InfoCardProps {
  cardWidth: string;
  cardHeight: string;
  title: string;
  paragraph: string;
  paragraphColor: string;
  titleSize: string;
  titleColor: string;
  cardColor: string;
}

export const InfoCard = ({
  cardWidth,
  cardHeight,
  title,
  paragraph,
  paragraphColor,
  titleSize,
  titleColor,
  cardColor,
}: InfoCardProps) => (
  <div className="py-5 flex justify-between">
    <div
      className={`p-8 ${cardWidth} ${cardHeight} ${cardColor}  rounded-2xl shadow-md`}
    >
      <div
        className={`font-semibold ${titleColor} ${titleSize} m-auto w-[80%] leading-normal mb-2`}
      >
        {title}
      </div>
      <p
        className={`font-normal ${paragraphColor} align-middle m-auto  w-[80%] text-base leading-5`}
      >
        {paragraph}
      </p>
    </div>
  </div>
);
