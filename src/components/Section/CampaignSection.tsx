import Image from "next/image";
import Link from "next/link";

export const CampaignSection = () => {
  return (
    <div className="container mx-auto p-6 ">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 text-center lg:items-center lg:justify-between">
        <h1 className="font-semibold text-6xl leading-[4.75rem] text-[#042940]">
          Campaigns
        </h1>
        <p className="font-semibold text-xl mt-6 text-[#005C53] ">
          Small efforts make big change
        </p>
        <hr className="w-48 h-[8px] mx-auto bg-[#9FC131] border-0 rounded-[20px] my-2" />
      </div>
      <div className="flex flex-row  justify-evenly ">
        <div className="max-w-sm mb-10 bg-[#DEEFE7] border border-gray-200 rounded-[16px] shadow-md ">
          <a href="#">
            {/*<div className="absolute top-5 right-5">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_270_559)">
                  <path
                    d="M2 15H11V24H7C5.67392 24 4.40215 23.4732 3.46447 22.5355C2.52678 21.5979 2 20.3261 2 19V15ZM24 11C24 11.5304 23.7893 12.0391 23.4142 12.4142C23.0391 12.7893 22.5304 13 22 13H13V8.957C12.664 8.983 12.329 9 12 9C11.671 9 11.336 8.983 11 8.957V13H2C1.46957 13 0.960859 12.7893 0.585786 12.4142C0.210714 12.0391 0 11.5304 0 11C0 9.93913 0.421427 8.92172 1.17157 8.17157C1.92172 7.42143 2.93913 7 4 7H5.738C5.1726 6.5016 4.7238 5.88488 4.42344 5.1936C4.12307 4.50232 3.97851 3.75341 4 3C4 2.73478 4.10536 2.48043 4.29289 2.29289C4.48043 2.10536 4.73478 2 5 2C5.26522 2 5.51957 2.10536 5.70711 2.29289C5.89464 2.48043 6 2.73478 6 3C6 5.622 8.371 6.53 10.174 6.841C9.50852 5.66105 9.10791 4.35037 9 3C9 2.20435 9.31607 1.44129 9.87868 0.87868C10.4413 0.31607 11.2044 0 12 0C12.7956 0 13.5587 0.31607 14.1213 0.87868C14.6839 1.44129 15 2.20435 15 3C14.8921 4.35037 14.4915 5.66105 13.826 6.841C15.629 6.53 18 5.622 18 3C18 2.73478 18.1054 2.48043 18.2929 2.29289C18.4804 2.10536 18.7348 2 19 2C19.2652 2 19.5196 2.10536 19.7071 2.29289C19.8946 2.48043 20 2.73478 20 3C20.0215 3.75341 19.8769 4.50232 19.5766 5.1936C19.2762 5.88488 18.8274 6.5016 18.262 7H20C21.0609 7 22.0783 7.42143 22.8284 8.17157C23.5786 8.92172 24 9.93913 24 11ZM11 3C11.1207 4.06283 11.4613 5.08891 12 6.013C12.5387 5.08891 12.8793 4.06283 13 3C13 2.73478 12.8946 2.48043 12.7071 2.29289C12.5196 2.10536 12.2652 2 12 2C11.7348 2 11.4804 2.10536 11.2929 2.29289C11.1054 2.48043 11 2.73478 11 3ZM13 24H17C17.6566 24 18.3068 23.8707 18.9134 23.6194C19.52 23.3681 20.0712 22.9998 20.5355 22.5355C20.9998 22.0712 21.3681 21.52 21.6194 20.9134C21.8707 20.3068 22 19.6566 22 19V15H13V24Z"
                    fill="#005C53"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_270_559">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>*/}
            <Image
              className="w-full rounded-t-[16px] object-cover"
              width="800"
              height="800"
              src="/Images/pastrolists400px.png"
              alt="Modern building architecture"
            />
            <div className="relative -mt-10">
              <div className="text-lg pl-2 bg-[#DBF227] w-[320px] h-[40px] rounded-tr-[3.75rem] text-left text-green-[#042940] w-[320px]">
                <span className="inline-block align-middle">
                  Expiry: 31 December 2022, 8pm UTC
                </span>
              </div>
            </div>
          </a>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-[#042940]">
              Fortune DIVA
            </h5>

            <div className="text-indigo-600 flex items-center dark:text-indigo-400">
              <span className="text-slate-400 font-normal">#S1234</span>

              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2"
              >
                <g clip-path="url(#clip0_270_567)">
                  <path
                    d="M8 0C6.41775 0 4.87103 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00888 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9977 5.87897 15.1541 3.84547 13.6543 2.34568C12.1545 0.845886 10.121 0.00229405 8 0V0ZM10.6667 8.66667H8.66667V10.6667C8.66667 10.8435 8.59643 11.013 8.47141 11.1381C8.34638 11.2631 8.17682 11.3333 8 11.3333C7.82319 11.3333 7.65362 11.2631 7.5286 11.1381C7.40358 11.013 7.33334 10.8435 7.33334 10.6667V8.66667H5.33334C5.15653 8.66667 4.98696 8.59643 4.86193 8.47141C4.73691 8.34638 4.66667 8.17681 4.66667 8C4.66667 7.82319 4.73691 7.65362 4.86193 7.5286C4.98696 7.40357 5.15653 7.33333 5.33334 7.33333H7.33334V5.33333C7.33334 5.15652 7.40358 4.98695 7.5286 4.86193C7.65362 4.73691 7.82319 4.66667 8 4.66667C8.17682 4.66667 8.34638 4.73691 8.47141 4.86193C8.59643 4.98695 8.66667 5.15652 8.66667 5.33333V7.33333H10.6667C10.8435 7.33333 11.0131 7.40357 11.1381 7.5286C11.2631 7.65362 11.3333 7.82319 11.3333 8C11.3333 8.17681 11.2631 8.34638 11.1381 8.47141C11.0131 8.59643 10.8435 8.66667 10.6667 8.66667Z"
                    fill="#898989"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_270_567">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div className="mb-5 border-b-2 border-[#9FC131]">
              <p className="mb-3 font-normal text-[#000000]">
                A conditional donation compaign to provide insurance to farmers
                against damage caused by insufficient rain in Africa. This
                campaign aims to support more than 150 farmers across Africa.
              </p>
            </div>

            <div className="mb-3 w-full bg-[#D6D58E] rounded-[10px]">
              <div className="bg-[#005C53] text-xs w-[45%] font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full">
                {" "}
                45%
              </div>
            </div>

            <div className="grid grid-cols-3 text-center divide-x-[1px] divide-[#005C53] mb-3">
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
            <Link href="/campaign">
              <button
                type="button"
                className="text-white bg-[#042940] hover:bg-blue-700 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
              >
                View Campings
              </button>
            </Link>
          </div>
        </div>
        <div className="max-w-sm max-h-xl mb-10 p-5 text-center bg-[#DEEFE7] border border-gray-200 rounded-[16px] shadow-md ">
          <div className=" bg-red-400">
            {" "}
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
      </div>
    </div>
  );
};
