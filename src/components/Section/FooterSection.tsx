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

    <div className="sm:flex sm:items-center sm:justify-between">
      <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
        <a
          href="#"
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
              d="M17.5629 1.00458L14.7856 1C11.6655 1 9.64909 3.12509 9.64909 6.41423V8.91055H6.85668C6.61538 8.91055 6.41998 9.1115 6.41998 9.35937V12.9763C6.41998 13.2241 6.61561 13.4249 6.85668 13.4249H9.64909V22.5514C9.64909 22.7993 9.84449 23 10.0858 23H13.7291C13.9704 23 14.1658 22.799 14.1658 22.5514V13.4249H17.4308C17.6721 13.4249 17.8675 13.2241 17.8675 12.9763L17.8688 9.35937C17.8688 9.24036 17.8227 9.12638 17.7409 9.04215C17.6592 8.95793 17.5478 8.91055 17.4319 8.91055H14.1658V6.79439C14.1658 5.77727 14.4017 5.26094 15.6916 5.26094L17.5625 5.26025C17.8035 5.26025 17.9989 5.0593 17.9989 4.81166V1.45317C17.9989 1.20576 17.8038 1.00504 17.5629 1.00458Z"
              fill="#9FC131"
            />
          </svg>
          <span className="sr-only">Facebook page</span>
        </a>
        <a
          href="#"
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
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2 12C2 7.80863 2 5.71294 3.05041 4.26718C3.38964 3.80026 3.80026 3.38964 4.26718 3.05041C5.71294 2 7.80863 2 12 2C16.1914 2 18.2871 2 19.7328 3.05041C20.1997 3.38964 20.6104 3.80026 20.9496 4.26718C22 5.71294 22 7.80863 22 12C22 16.1914 22 18.2871 20.9496 19.7328C20.6104 20.1997 20.1997 20.6104 19.7328 20.9496C18.2871 22 16.1914 22 12 22C7.80863 22 5.71294 22 4.26718 20.9496C3.80026 20.6104 3.38964 20.1997 3.05041 19.7328C2 18.2871 2 16.1914 2 12ZM12 6.70588C9.07632 6.70588 6.70588 9.07632 6.70588 12C6.70588 14.9237 9.07632 17.2941 12 17.2941C14.9237 17.2941 17.2941 14.9237 17.2941 12C17.2941 9.07632 14.9237 6.70588 12 6.70588ZM12 15.3088C10.1762 15.3088 8.69118 13.8238 8.69118 12C8.69118 10.1749 10.1762 8.69118 12 8.69118C13.8238 8.69118 15.3088 10.1749 15.3088 12C15.3088 13.8238 13.8238 15.3088 12 15.3088ZM18.3966 6.30883C18.3966 6.69844 18.0808 7.01427 17.6912 7.01427C17.3016 7.01427 16.9857 6.69844 16.9857 6.30883C16.9857 5.91923 17.3016 5.60339 17.6912 5.60339C18.0808 5.60339 18.3966 5.91923 18.3966 6.30883Z"
              fill="#9FC131"
            />
          </svg>

          <span className="sr-only">Instagram page</span>
        </a>
        <a
          href="#"
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
        <a href="" className="flex items-center">
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
