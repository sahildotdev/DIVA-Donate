import Image from "next/image";

export const WorkSection = () => (
  <div className="flex flex-col">
    {/*<div className="absolute sm-none -ml-[5%] ">
      <svg
        width="720"
        height="720"
        viewBox="0 0 920 920"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.06">
          <circle
            cx="460"
            cy="460"
            r="449"
            fill="white"
            stroke="#9FC131"
            stroke-width="22"
          />
          <g clip-path="url(#clip0_309_2220)">
            <path
              d="M540 275.001C540 318.261 483.6 372.021 455.5 394.561C451.103 398.086 445.636 400.007 440 400.007C434.364 400.007 428.897 398.086 424.5 394.561C396.4 372.001 340 318.261 340 275.001C339.369 261.085 344.276 247.486 353.646 237.179C363.016 226.872 376.087 220.695 390 220.001C403.913 220.695 416.984 226.872 426.354 237.179C435.724 247.486 440.631 261.085 440 275.001C439.369 261.085 444.276 247.486 453.646 237.179C463.016 226.872 476.087 220.695 490 220.001C503.913 220.695 516.984 226.872 526.354 237.179C535.724 247.486 540.631 261.085 540 275.001V275.001ZM686.76 467.001L532.76 635.181C514.011 655.625 491.213 671.946 465.817 683.105C440.42 694.264 412.98 700.018 385.24 700.001H300C278.783 700.001 258.434 691.573 243.431 676.57C228.429 661.567 220 641.218 220 620.001V520.001C220 498.784 228.429 478.435 243.431 463.433C258.434 448.43 278.783 440.001 300 440.001H455.74C462.351 440.014 468.876 441.504 474.837 444.363C480.798 447.222 486.045 451.377 490.193 456.524C494.342 461.672 497.287 467.681 498.815 474.114C500.342 480.546 500.412 487.238 499.02 493.701C496.855 502.742 491.978 510.904 485.043 517.096C478.109 523.287 469.447 527.211 460.22 528.341L376.96 540.001C371.712 540.754 366.978 543.559 363.798 547.801C360.618 552.042 359.252 557.373 360 562.621C360.748 567.872 363.551 572.611 367.793 575.796C372.035 578.98 377.369 580.349 382.62 579.601L467.66 567.601C487.69 564.651 505.999 554.623 519.27 539.333C532.542 524.044 539.896 504.506 540 484.261C539.902 479.98 539.467 475.714 538.7 471.501L609.54 396.761C618.882 386.646 631.846 380.638 645.603 380.05C659.359 379.462 672.789 384.34 682.96 393.621C693.08 402.895 699.149 415.775 699.86 429.483C700.571 443.191 695.866 456.63 686.76 466.901V467.001Z"
              fill="#005C53"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_309_2220">
            <rect
              width="480"
              height="480"
              fill="white"
              transform="translate(220 220.001)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>*/}
    <div className="mx-auto py-12 px-4 sm:px-6 text-center divide-y divide-slate-700">
      <h1 className="font-semibold text-6xl leading-[4.75rem]  text-[#042940]  ">
        How it works
      </h1>
    </div>
    <hr className="w-48 h-[8px] bg-[#9FC131] border-0 rounded-[20px] mx-auto" />
    <div className="bg-deep-purple-accent-700">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col mb-16 sm:text-center sm:hidden md:hidden lg:block xl:block 2xl:block sm:mb-0">
          <Image
            className="w-full"
            width="800"
            height="800"
            src="/Images/how-it-works-web.png"
            alt="Modern building architecture"
          />
        </div>
        <div className="sm:block md:block lg:hidden xl:hidden 2xl:hidden flex flex-col mb-16 sm:text-center sm:mb-0">
          <Image
            className="w-full"
            width="800"
            height="800"
            src="/Images/how-it-works-mobile.png"
            alt="Modern building architecture"
          />
        </div>
      </div>
    </div>
  </div>
);
