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
  const collateralTokenAddress = "0xc2132D05D31c914a87C6611C10748AEb04B58e8F";
  const divaContractAddress = "0xFf7d52432B19521276962B67FFB432eCcA609148";
  const { address: activeAddress } = useAccount();
  const [decimals, setDecimals] = useState(0);
  const walletAddress = "0x0Aa30E5363f2b432D44e6a40Fc6a6A218dC5B484";
  const usdtTokenContract = useERC20Contract(collateralTokenAddress);

  useEffect(() => {
    const getDecimals = async () => {
        if (usdtTokenContract != null) {
            const decimals = await usdtTokenContract.decimals();
            setDecimals(decimals);
        }
    }
    getDecimals();
  },[])
  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const divaContract = new ethers.Contract('0xFf7d52432B19521276962B67FFB432eCcA609148', DivaABI, provider.getSigner());
    divaContract.getPoolParameters(1).then((res) => {
      console.log(res)
      console.log('goal', formatUnits(res.capacity, decimals))
      console.log('raised', formatUnits(res.collateralBalance, decimals))
      console.log('to go', formatUnits(res.capacity.sub(res.collateralBalance), decimals))
      setGoal(Number(formatUnits(res.capacity, decimals)));
      setRaised(Number(formatUnits(res.collateralBalance, decimals)));
      setToGo(Number(formatUnits(res.capacity.sub(res.collateralBalance), decimals)));
    })
  }, [decimals])

  const handleDonation = async () => {
    if (amount != null) {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const divaContract = new ethers.Contract('0xFf7d52432B19521276962B67FFB432eCcA609148', DivaABI, provider.getSigner());
      console.log(data)
      console.log(formatEther(data?.gasPrice))
      console.log(formatEther(data?.maxFeePerGas))
      const decimals = await usdtTokenContract.decimals();
      const allowance = await usdtTokenContract.allowance(activeAddress, divaContractAddress);
      console.log(formatUnits(allowance,decimals));
      if (allowance < parseUnits(amount!.toString(), decimals)) {
        usdtTokenContract.approve(divaContractAddress, parseUnits(amount!.toString(), decimals),{gasPrice: data?.gasPrice})
            .then(
                (tx) => {
                  tx.wait().then(() => {
                    divaContract.addLiquidity(1, parseUnits(amount!.toString(), decimals), activeAddress, walletAddress,{gasPrice: data?.maxFeePerGas}).then(
                        (tx) => {
                          tx.wait().then(() => {
                            console.log('success');
                          })
                        })
                  }).catch((err) => {
                    console.log(err);
                  })
                }).catch((err) => {
          console.log(err);
        })
      } else {
        divaContract.addLiquidity(1, parseUnits(amount!.toString(), decimals), activeAddress, walletAddress,{gasPrice: data?.maxFeePerGas}).then(
            (tx) => {
              tx.wait().then(() => {
                console.log('success');
              })
            }).catch((err) => {
          console.log(err);
        })
      }

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
      const result = await getTokenBalance(usdtTokenContract, walletAddress);
      const tokenAmount = valueFormatter(
          result?.balance / Math.pow(10, result?.decimals),
          3
      );
      setBalance(tokenAmount);
  };
  useEffect(() => {
    getBalance();
  }, []);
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
                  <div className={'bg-[#005C53] text-xs w-['+ (raised / goal * 100) +'%] font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full'}>
                    {" "}
                    {raised / goal * 100}%
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
                                className="absolute right-1 text-white bg-green-900 hover:bg-green-800 focus:ring-4 focus:outline-none
                              focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex
                              items-center dark:bg-green-800 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                type="button">
                          USDT
                          <svg className="w-4 h-4 ml-2" aria-hidden="true"
                               fill="none" stroke="currentColor" viewBox="0 0 24 24"
                               xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M19 9l-7 7-7-7">

                            </path>
                          </svg>
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
                    Available balance:&nbsp;{balance}
                  </p>
                </div>
                <button id='donate' onClick={handleDonation} className="w-full mt-10 py-3 text-lg text-white bg-[#042940] rounded-[10px] hover:bg-[#042940] focus:outline-none focus:ring-2 focus:ring-[#005C53] focus:ring-opacity-50"
                        type="button">
                  Donate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
