import Image from "next/image";

export const FooterSection = () => (
  <footer className="w-full static bottom-0 bg-[#042940] pb-6">
    <div className="container p-10 mx-auto">
      <div className="md:flex md:justify-between items-center pb-14">
        <a href="" className="flex items-center">
          <Image
            className=""
            width="336"
            height="34"
            src="/Images/donate-logo-light.png"
            alt="Modern building architecture"
          />
        </a>

        <div>
          <ul className=" text-[#DEEFE7] self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
            <li className="mb-4">
              <a href="" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="" className="hover:underline">
                Campaigns
              </a>
            </li>
            <li>
              <a href="" className="hover:underline">
                My Donations
              </a>
            </li>
            <li>
              <a href="" className="hover:underline">
                My Campaigns
              </a>
            </li>
            <li>
              <a href="" className="hover:underline">
                FAQs
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="sm:flex sm:justify-between">
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <Image
              width="24"
              height="24"
              src="/Images/Facebook.svg"
              alt="Modern building architecture"
            />
            <span className="sr-only">Facebook page</span>
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <Image
              width="24"
              height="24"
              src="/Images/Instagram.svg"
              alt="Modern building architecture"
            />
            <span className="sr-only">Instagram page</span>
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <Image
              width="24"
              height="24"
              src="/Images/Twitter.svg"
              alt="Modern building architecture"
            />
            <span className="sr-only">Twitter page</span>
          </a>
        </div>
        <a href="" className="flex items-center">
          <Image
            className=""
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
