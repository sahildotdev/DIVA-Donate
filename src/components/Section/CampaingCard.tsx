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
        setGoal(Number(formatUnits(res.capacity, decimals)));
        setRaised(Number(formatUnits(res.collateralBalance, decimals)));
        setToGo(Number(formatUnits(res.capacity.sub(res.collateralBalance), decimals)));
      })
    }
  }, [decimals])
  useEffect(() => {
    setPercentage(raised / goal * 100);
  }, [goal, raised])
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
  }, [activeAddress]);
  return (
    <div className="container pt-[5rem] sm:pt-[8rem] md:pt-[8rem] justify-center mx-auto px-4">
      <div className="grid px-4 py-8 mx-auto gap-auto lg:py-16 lg:grid-cols-12">
        <div className="mx-auto lg:mt-0 lg:col-span-5 lg:flex">
          <div className="max-w-xl sm-bg-auto bg-cover bg-center bg-no-repeat rounded-[2rem] bg-[url('/Images/pastrolists400pxVertical.png')] rounded-lg ">
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
                Expiry: 31 December 2022, 8pm UTC
              </span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className=" flex flex-col py-12">
            <div className="max-w-xl mx-auto mb-10 bg-[#FFFFFF] border border-gray-200 rounded-[16px] drop-shadow-xl ">
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
                            className="w-full p-4 pl-10 pr-100 text-lg border border-[#042940] focus:outline-none text-gray-900 rounded-[10px] bg-[rgba(4, 41, 64, 0.24)]"
                        />
                        <button id="max" onClick={handleMax} className="absolute right-20 top-0 mt-4 mr-6">
                          Max
                        </button>
                        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
                                className="disabled absolute right-1 text-white bg-green-900
                              focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex
                              items-center dark:bg-green-800 "
                                type="button">
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
