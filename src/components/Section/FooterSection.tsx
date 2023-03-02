import Image from "next/image";

export const FooterSection = () => (
  <footer className="p-4 sm:p-6 bg-[#042940] ">
    <div className="md:flex md:justify-between text-center ">
      <div className="mb-6 md:mb-0">
        <a href="" className="flex items-center">
          <Image
            className="w-full"
            width="800"
            height="800"
            src="/Images/donate-logo-light.png"
            alt="Modern building architecture"
          />
        </a>
      </div>

      <div>
        <ul className=" text-[#DEEFE7] self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
          <li className="mb-4">
            <a href="" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="campaign" className="hover:underline">
              Pilot Campaign
            </a>
          </li>
          <li>
            <a href="donations" className="hover:underline">
              My Donations
            </a>
          </li>
          {/*<li>*/}
          {/*  <a href="" className="hover:underline">*/}
          {/*    My Campaigns*/}
          {/*  </a>*/}
          {/*</li>*/}
          <li>
            <a href="faq" className="hover:underline">
              FAQs
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className="sm:flex sm:items-center sm:justify-between">
      <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
        <a
          rel={"noopener noreferrer"}
          target="_blank"
          href="https://twitter.com/DIVADonate_xyz"
          className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.5 5.77233C21.7271 6.10027 20.8978 6.32267 20.0264 6.42196C20.9161 5.91181 21.5972 5.10263 21.92 4.1414C21.0854 4.61383 20.1642 4.95688 19.1826 5.14285C18.3966 4.33994 17.2785 3.83984 16.0384 3.83984C13.6593 3.83984 11.7303 5.68691 11.7303 7.9637C11.7303 8.2866 11.7683 8.60199 11.8418 8.90357C8.26201 8.73141 5.08768 7.08917 2.96314 4.59372C2.59176 5.20189 2.38049 5.91053 2.38049 6.66697C2.38049 8.09814 3.14161 9.36093 4.2964 10.0997C3.5904 10.0771 2.92639 9.89116 2.34508 9.58205V9.63357C2.34508 11.6314 3.83056 13.2988 5.80024 13.6783C5.43936 13.7713 5.05882 13.8228 4.66514 13.8228C4.38696 13.8228 4.11794 13.7964 3.85417 13.7461C4.40267 15.3859 5.99315 16.5783 7.87756 16.611C6.40388 17.7167 4.54573 18.3739 2.52749 18.3739C2.17976 18.3739 1.83724 18.3537 1.5 18.3173C3.40671 19.4896 5.67036 20.1732 8.10327 20.1732C16.028 20.1732 20.3597 13.8881 20.3597 8.43741L20.3453 7.90341C21.1917 7.32537 21.9239 6.59912 22.5 5.77233Z"
              fill="#9FC131"
            />
          </svg>

          <span className="sr-only">Twitter page</span>
        </a>
      </div>
      <div className="mb-6 md:mb-0 ">
        <a rel={"noopener noreferrer"} target="_blank" href="https://divaprotocol.io" className="flex items-center">
          <Image
            className="w-full"
            width="188"
            height="34"
            src="/Images/poweredby-logo.png"
            alt="Modern building architecture"
          />
        </a>
      </div>
    </div>
  </footer>
);
