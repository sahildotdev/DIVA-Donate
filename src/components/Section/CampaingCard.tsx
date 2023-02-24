import Link from "next/link";
import {useEffect, useState} from "react";
import {
  useERC20Contract,
  useDivaContract,
} from "../../utils/hooks/useContract";
import {getSigner, getTokenBalance, valueFormatter} from "../../utils/general";
import {ethers} from "ethers";
import {formatEther, formatUnits, parseEther, parseUnits} from "ethers/lib/utils";
import {useAccount, useFeeData} from "wagmi";
import {DivaABI} from "../../abi";

export const CampaingCard = () => {
  const [balance, setBalance] = useState(0);
  const { data, isError, isLoading } = useFeeData({chainId:137})
  const [amount, setAmount] = useState<number>();
  const [goal, setGoal] = useState<number>(0);
  const [raised, setRaised] = useState<number>(0);
  const [toGo, setToGo] = useState<number>(0);
  const [percentage, setPercentage] = useState<number>(0);
  const [approveEnabled, setApproveEnabled] = useState<boolean>(false);
  const [approveLoading, setApproveLoading] = useState<boolean>(false);
  const [donateEnabled, setDonateEnabled] = useState<boolean>(false);
  const [donateLoading, setDonateLoading] = useState<boolean>(false);
  const [expiryDate, setExpiryDate] = useState<string>("");
  const collateralTokenAddress = "0xc2132D05D31c914a87C6611C10748AEb04B58e8F";
  const divaContractAddress = "0xFf7d52432B19521276962B67FFB432eCcA609148";
  const { address: activeAddress } = useAccount();
  const [decimals, setDecimals] = useState();
  const walletAddress = "0x0Aa30E5363f2b432D44e6a40Fc6a6A218dC5B484";
  const usdtTokenContract = useERC20Contract(collateralTokenAddress);
  const poolId = 1;
  useEffect(() => {

    const checkAllowance = async () => {
      const sanitized = amount?.replace(/,/g, '.');
      if (sanitized > 0 && usdtTokenContract != null) {
        const allowance = await usdtTokenContract.allowance(activeAddress, divaContractAddress);
        if (allowance.gte(parseUnits(sanitized!.toString(), decimals))) {
          setApproveEnabled(false);
          setDonateEnabled(true);
        } else {
          setApproveEnabled(true);
          setDonateEnabled(false);
        }
      } else {
        setApproveEnabled(false);
        setDonateEnabled(false);
      }

    }
    if (activeAddress != null) {
      checkAllowance();
    }
  }, [activeAddress, amount, decimals])
  useEffect(() => {
    const getDecimals = async () => {
      if (usdtTokenContract != null) {
        const decimals = await usdtTokenContract.decimals();
        setDecimals(decimals);
      }
    }
    getDecimals();
    if (activeAddress != null && typeof window != 'undefined' && typeof window?.ethereum != 'undefined') {

      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const divaContract = new ethers.Contract(divaContractAddress, DivaABI, provider.getSigner());
      divaContract.getPoolParameters(poolId).then((res) => {
        setExpiryDate(new Date(Number(res.expiryTime)*1000).toString());
        setGoal(Number(formatUnits(res.capacity, decimals)));
        setRaised(Number(formatUnits(res.collateralBalance, decimals)));
        setToGo(Number(formatUnits(res.capacity.sub(res.collateralBalance), decimals)));
      })
    }
  }, [decimals, donateLoading])
  useEffect(() => {
    setPercentage(raised / goal * 100);
  }, [goal, raised, donateLoading])
  const handleApprove = async () => {
    setApproveLoading(true);
    usdtTokenContract.approve(divaContractAddress, parseUnits(amount!.toString(), decimals),{gasPrice: data?.gasPrice})
        .then(
            (tx) => {
              tx.wait().then(() => {
                setApproveEnabled(false);
                setDonateEnabled(true);
                setApproveLoading(false);
              }
                ).catch((err) => {
                setApproveLoading(false);
                console.log(err);
              })}
            ).catch((err) => {
              setApproveLoading(false);
              console.log(err);
            })
  }
  const handleDonation = async () => {
    if (amount != null) {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const divaContract = new ethers.Contract(divaContractAddress, DivaABI, provider.getSigner());
      const decimals = await usdtTokenContract.decimals();
      const allowance = await usdtTokenContract.allowance(activeAddress, divaContractAddress);
      setDonateLoading(true);
      divaContract.addLiquidity(poolId, parseUnits(amount!.toString(), decimals), activeAddress, walletAddress,{gasPrice: data?.maxFeePerGas}).then(
          (tx) => {
            tx.wait().then(() => {
              setDonateLoading(false);
            })
          }).catch((err) => {
            setDonateLoading(false);
            console.log(err);
      })
    }
  }
  const handleMax = () => {
    if (balance != null){
      setAmount(balance);
    }
  }
  const handleAmountChange = (e) => {
        setAmount(e.target.value);
  }

  const getBalance = async () => {
      const result = await getTokenBalance(usdtTokenContract, activeAddress);
      const tokenAmount = Number(formatUnits(result?.balance, result?.decimals));
      setBalance(tokenAmount);
  };
  useEffect(() => {
    if (activeAddress != null) {
      getBalance();
    }
  }, [activeAddress, donateLoading]);
  return (
    <div className="container pt-[5rem] sm:pt-[8rem] md:pt-[8rem] justify-center mx-auto">
      <div className="grid px-12 py-8 mx-auto lg:py-16 lg:grid-cols-9">
        <div className="mx-auto lg:mt-0 lg:col-span-4 lg:flex">
          <div className=" sm-bg-auto bg-cover bg-center bg-no-repeat rounded-[28px] bg-[url('/Images/pastrolists400pxVertical.png')] rounded-lg ">
            <div className="p-8 relative top-[28rem] text-[#DEEFE7] ">
              <h5 className="font-semibold text-4xl font-['lora']">
                Fortune DIVA
              </h5>
              <p className="card-text">
                A conditional donation compaign to provide insurance to farmers
                against damage caused by insufficient rain in Africa. This
                campaign aims to support more than 150 farmers across Africa.
              </p>
              <span className="inline-block text-lg text-[#DBF227] align-middle">
                Expiry: {expiryDate}
              </span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className=" flex flex-col">
            <div className=" mx-auto pb-12 bg-[#FFFFFF] border border-gray-200 rounded-[26px] drop-shadow-xl ">
              <div className="justify-evenly p-[60px] ">
                <div className="mb-10">
                  <p className="mb-3 font-normal font-['Open_Sans'] text-base text-center text-[#042940]">
                    Thank you for getting involved in providing insurance to
                    farmers against damage caused by insufficient rain in
                    Africa.
                  </p>
                </div>

                <div className="mb-10 w-full bg-[#D6D58E] rounded-[10px]">
                  <div className="bg-[#005C53] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full"
                       style={{width: percentage+'%'}}>
                    {" "}
                    {percentage.toFixed(2)}%
                  </div>
                </div>

                <div className="grid grid-cols-3 text-center divide-x-[1px] divide-[#005C53] mb-10">
                  <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 font-medium text-xl text-[#042940]">
                      Goal
                    </dt>
                    <dd className="font-normal text-base text-[#042940] ">
                      ${goal}
                    </dd>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 font-medium text-xl text-[#042940]">
                      Raised
                    </dt>
                    <dd className="font-normal text-base text-[#042940] ">
                      ${raised}
                    </dd>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 font-medium text-xl text-[#042940]">
                      To go
                    </dt>
                    <dd className="font-normal text-base text-[#042940] ">
                      ${toGo}
                    </dd>
                  </div>
                </div>
                <div className="mb-3">
                  <p className="font-semibold text-2xl font-['lora'] text-left text-[#042940]">
                    Enter donation amount
                  </p>
                </div>

                <div>
                  <form>
                    <div className="flex">
                      <div className="relative flex items-center w-full">
                        <input
                            id="search"
                            value={amount}
                            onChange={handleAmountChange}
                            placeholder="Amount"
                            className="w-full p-4 pl-10 pr-10 text-lg border border-[#042940] focus:outline-none text-gray-900 rounded-[10px] bg-[rgba(4, 41, 64, 0.24)]"
                        />
                        <button id="max" onClick={handleMax} className="absolute right-20 top-0 mt-4 mr-6">
                          Max
                        </button>
                        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
                                className=" spadisabled absolute right-1 text-white bg-green-900
                              focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex
                              items-center dark:bg-green-800 "
                                type="button">
                          <div className="pr-2">
                            <svg width="20" height="20" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink">
                              <circle cx="12" cy="12.3333" r="12" fill="url(#pattern0)"/>
                              <defs>
                                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                  <use href="#image0_130_142" transform="scale(0.00357143)"/>
                                </pattern>
                                <image id="image0_130_142" width="280" height="280" href="data:image/png;base64,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"/>
                              </defs>
                            </svg>
                          </div>

                          USDT
                          {/*<svg className="w-4 h-4 ml-2" aria-hidden="true"*/}
                          {/*     fill="none" stroke="currentColor" viewBox="0 0 24 24"*/}
                          {/*     xmlns="http://www.w3.org/2000/svg">*/}
                          {/*  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"*/}
                          {/*        d="M19 9l-7 7-7-7">*/}

                          {/*  </path>*/}
                          {/*</svg>*/}
                        </button>
                        <div id="dropdown"
                             className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200"
                              aria-labelledby="dropdownDefaultButton">
                            <li>
                              <a href="#"
                                 className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">USDT</a>
                            </li>
                            <li>
                              <a href="#"
                                 className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ETH</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="mb-3">
                  <p className="font-normal text-base font-['Open_Sans'] text-right text-[#042940]">
                    Available balance:&nbsp;{balance.toFixed(2)}
                  </p>
                </div>
                <div className="flex flex-row justify-between border-spacing-x-8">
                  {approveLoading ? (

                      <div style={{width:'50%'}} role="status">
                        <svg aria-hidden="true"
                             className="w-9 h-9 ml-20 mt-11 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                             viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="currentColor"/>
                          <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentFill"/>
                        </svg>
                        <span className="sr-only">Loading...</span>
                      </div>

                  ) : (<button id='approve' onClick={handleApprove}
                           className="w-full disabled:opacity-25 mt-10 mr-1 py-3 text-lg text-white bg-[#042940] rounded-[10px] hover:bg-[#042940] focus:outline-none focus:ring-2 focus:ring-[#005C53] focus:ring-opacity-50"
                           type="button" style={{width:'50%'}} disabled={!approveEnabled}>
                    Approve
                  </button>)}
                  {donateLoading ? (
                      <div style={{width:'50%'}} role="status">
                        <svg aria-hidden="true"
                             className="w-9 h-9 ml-20 mt-11 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                             viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="currentColor"/>
                          <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentFill"/>
                        </svg>
                        <span className="sr-only">Loading...</span>
                      </div>
                  ):(
                      <button id='donate' onClick={handleDonation}
                           className="w-full disabled:opacity-25 mt-10 py-3 text-lg text-white bg-[#042940] rounded-[10px] hover:bg-[#042940] focus:outline-none focus:ring-2 focus:ring-[#005C53] focus:ring-opacity-50"
                           type="button" style={{width:'50%'}} disabled={!donateEnabled}>
                        Donate
                      </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
