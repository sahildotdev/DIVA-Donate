import Image from "next/image";

export const LinkSection = () => (
  <div className="container justify-center mx-auto">
    <div className="mx-auto max-w-7xl py-4 px-4 sm:px-6 text-center lg:items-center lg:justify-between">
      <h1 className="font-semibold text-4xl sm:text-6xl md:text-6l lg:text-6xl xl:text-6xl leading-[4.75rem] text-[#042940]">
        Links
      </h1>
      <hr className="w-[9rem] h-[8px] mx-auto bg-[#9FC131] border-0 rounded-[20px] my-2" />
    </div>

    <div className="grid grid-rows-2 gap-6 pb-16 lg:grid-cols-2">
    <div>
        <a
          href="https://www.divaprotocol.io/posts/diva-conditional-donations"
          className="group block max-w-2xl mx-auto rounded-lg p-6 bg-white space-y-3"
          target={'_blank'} rel="noreferrer"
        >
          <div className="flex items-center space-x-3">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_130_349)">
                <path
                  d="M13.0117 24.484C11.0267 26.5424 7.79393 26.7323 5.5816 24.9203C4.26405 23.7796 3.59104 22.0643 3.78127 20.332C3.94601 19.0547 4.54295 17.8723 5.47283 16.9813L9.06853 13.3832C9.80062 12.6509 9.80062 11.4638 9.06853 10.7314C8.3362 9.99935 7.14911 9.99935 6.41678 10.7314L2.89739 14.2521C1.29314 15.7991 0.281451 17.8591 0.0380655 20.0744C-0.416531 25.0639 3.25968 29.4772 8.24918 29.9318C10.9286 30.176 13.5783 29.2181 15.4822 27.317L19.2429 23.5576C19.975 22.8252 19.975 21.6381 19.2429 20.9058C18.5106 20.1737 17.3235 20.1737 16.5911 20.9058L13.0117 24.484Z"
                  fill="#005C53"
                />
                <path
                  d="M26.4519 1.83419C22.7183 -0.908865 17.5339 -0.478824 14.3033 2.8419L10.7639 6.38256C10.0318 7.11488 10.0318 8.30198 10.7639 9.03431C11.4962 9.7664 12.6833 9.7664 13.4157 9.03431L17.0114 5.44236C18.953 3.43416 22.0946 3.20794 24.304 4.91727C26.578 6.78195 26.9099 10.137 25.0452 12.4111C24.9361 12.5441 24.8206 12.6718 24.699 12.7937L20.9383 16.5545C20.2062 17.2868 20.2062 18.4739 20.9383 19.2062C21.6706 19.9383 22.8577 19.9383 23.59 19.2062L27.3508 15.4455C30.8912 11.8937 30.8821 6.14427 27.3303 2.60379C27.0543 2.32869 26.7609 2.07165 26.4519 1.83419Z"
                  fill="#005C53"
                />
                <path
                  d="M10.7638 16.5575L16.5905 10.7307C17.3229 9.9983 18.5103 9.9983 19.2427 10.7307C19.9751 11.4631 19.9751 12.6505 19.2427 13.3828L13.4159 19.2096C12.6835 19.942 11.4961 19.942 10.7638 19.2096C10.0314 18.4773 10.0314 17.2899 10.7638 16.5575Z"
                  fill="#005C53"
                />
              </g>
              <defs>
                <clipPath id="clip0_130_349">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <h3 className="text-[#005C53] font-['lora'] text-2xl font-semibold">
              Announcement
            </h3>
          </div>
          <p className="text-[#042940] font-semibold text-base">
            Event-driven conditional donations - A pilot program by DIVA Technologies AG, Fortune Connect and Shamba Network
          </p>
        </a>
      </div>
      
      <div>
        <a
          href="https://www.divaprotocol.io/posts/diva-how-diva-protocol-can-help-unlock-affordable-insurance-for-farmers"
          className="group block max-w-2xl mx-auto rounded-lg p-6 bg-white space-y-3 "
          target={'_blank'} rel="noreferrer"
        >
          <div className="flex items-center space-x-3">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_130_349)">
                <path
                  d="M13.0117 24.484C11.0267 26.5424 7.79393 26.7323 5.5816 24.9203C4.26405 23.7796 3.59104 22.0643 3.78127 20.332C3.94601 19.0547 4.54295 17.8723 5.47283 16.9813L9.06853 13.3832C9.80062 12.6509 9.80062 11.4638 9.06853 10.7314C8.3362 9.99935 7.14911 9.99935 6.41678 10.7314L2.89739 14.2521C1.29314 15.7991 0.281451 17.8591 0.0380655 20.0744C-0.416531 25.0639 3.25968 29.4772 8.24918 29.9318C10.9286 30.176 13.5783 29.2181 15.4822 27.317L19.2429 23.5576C19.975 22.8252 19.975 21.6381 19.2429 20.9058C18.5106 20.1737 17.3235 20.1737 16.5911 20.9058L13.0117 24.484Z"
                  fill="#005C53"
                />
                <path
                  d="M26.4519 1.83419C22.7183 -0.908865 17.5339 -0.478824 14.3033 2.8419L10.7639 6.38256C10.0318 7.11488 10.0318 8.30198 10.7639 9.03431C11.4962 9.7664 12.6833 9.7664 13.4157 9.03431L17.0114 5.44236C18.953 3.43416 22.0946 3.20794 24.304 4.91727C26.578 6.78195 26.9099 10.137 25.0452 12.4111C24.9361 12.5441 24.8206 12.6718 24.699 12.7937L20.9383 16.5545C20.2062 17.2868 20.2062 18.4739 20.9383 19.2062C21.6706 19.9383 22.8577 19.9383 23.59 19.2062L27.3508 15.4455C30.8912 11.8937 30.8821 6.14427 27.3303 2.60379C27.0543 2.32869 26.7609 2.07165 26.4519 1.83419Z"
                  fill="#005C53"
                />
                <path
                  d="M10.7638 16.5575L16.5905 10.7307C17.3229 9.9983 18.5103 9.9983 19.2427 10.7307C19.9751 11.4631 19.9751 12.6505 19.2427 13.3828L13.4159 19.2096C12.6835 19.942 11.4961 19.942 10.7638 19.2096C10.0314 18.4773 10.0314 17.2899 10.7638 16.5575Z"
                  fill="#005C53"
                />
              </g>
              <defs>
                <clipPath id="clip0_130_349">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <h3 className="text-[#005C53] font-['lora'] text-2xl font-semibold">
              Blog
            </h3>
          </div>
          <p className="text-[#042940] font-semibold text-base">
            How DIVA Protocol can help unlock affordable insurance for farmers
          </p>
        </a>
      </div>

      {/* <div>
        <a
          href="https://www.divaprotocol.io/posts/diva-how-diva-protocol-can-help-unlock-affordable-insurance-for-farmers"
          className="group block max-w-2xl mx-auto rounded-lg p-6 bg-white space-y-3"
          target={'_blank'} rel="noreferrer"
        >
          <div className="flex items-center space-x-3">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_130_349)">
                <path
                  d="M13.0117 24.484C11.0267 26.5424 7.79393 26.7323 5.5816 24.9203C4.26405 23.7796 3.59104 22.0643 3.78127 20.332C3.94601 19.0547 4.54295 17.8723 5.47283 16.9813L9.06853 13.3832C9.80062 12.6509 9.80062 11.4638 9.06853 10.7314C8.3362 9.99935 7.14911 9.99935 6.41678 10.7314L2.89739 14.2521C1.29314 15.7991 0.281451 17.8591 0.0380655 20.0744C-0.416531 25.0639 3.25968 29.4772 8.24918 29.9318C10.9286 30.176 13.5783 29.2181 15.4822 27.317L19.2429 23.5576C19.975 22.8252 19.975 21.6381 19.2429 20.9058C18.5106 20.1737 17.3235 20.1737 16.5911 20.9058L13.0117 24.484Z"
                  fill="#005C53"
                />
                <path
                  d="M26.4519 1.83419C22.7183 -0.908865 17.5339 -0.478824 14.3033 2.8419L10.7639 6.38256C10.0318 7.11488 10.0318 8.30198 10.7639 9.03431C11.4962 9.7664 12.6833 9.7664 13.4157 9.03431L17.0114 5.44236C18.953 3.43416 22.0946 3.20794 24.304 4.91727C26.578 6.78195 26.9099 10.137 25.0452 12.4111C24.9361 12.5441 24.8206 12.6718 24.699 12.7937L20.9383 16.5545C20.2062 17.2868 20.2062 18.4739 20.9383 19.2062C21.6706 19.9383 22.8577 19.9383 23.59 19.2062L27.3508 15.4455C30.8912 11.8937 30.8821 6.14427 27.3303 2.60379C27.0543 2.32869 26.7609 2.07165 26.4519 1.83419Z"
                  fill="#005C53"
                />
                <path
                  d="M10.7638 16.5575L16.5905 10.7307C17.3229 9.9983 18.5103 9.9983 19.2427 10.7307C19.9751 11.4631 19.9751 12.6505 19.2427 13.3828L13.4159 19.2096C12.6835 19.942 11.4961 19.942 10.7638 19.2096C10.0314 18.4773 10.0314 17.2899 10.7638 16.5575Z"
                  fill="#005C53"
                />
              </g>
              <defs>
                <clipPath id="clip0_130_349">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <h3 className="text-[#005C53] font-['lora'] text-2xl font-semibold">
              Blog
            </h3>
          </div>
          <p className="text-[#042940] font-semibold text-base">
            How DIVA Protocol can help unlock affordable insurance for farmers
          </p>
        </a>
      </div> */}
    </div>
  </div>
);
