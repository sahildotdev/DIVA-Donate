import { useMemo } from "react";
import { Contract, ethers } from "ethers";

import { DivaABI, ERC20ABI } from "../../abi";
import {getContract, getSigner} from "../general";
import { useAccount } from "wagmi";
import {Provider} from "@ethersproject/abstract-provider";
import {EtherscanProvider} from "@ethersproject/providers";

function useContract<T extends Contract = Contract>(
  address: string | undefined,
  ABI: any,
  withSignerIfPossible = true
): T | null {
  const { address: activeAddress } = useAccount();

  return useMemo(() => {
    const provider: any = new ethers.providers.AlchemyProvider(
      "matic",
      "p3-IGmZPQrd-ri5AGlGm4cVm8k1uhCXx" // Should be replaced by env variable
    );
    if (!address || !ABI || !provider) return null;
    try {
      return getContract(
        address,
        ABI,
        provider,
        withSignerIfPossible && activeAddress ? activeAddress : undefined
      );
    } catch (error) {
      return null;
    }
  }, [address, ABI, withSignerIfPossible, activeAddress]) as T | null;
}

export function useERC20Contract(
  contractAddress: string
): any {
  // const provider: any =
  //     new ethers.providers.AlchemyProvider(
  //     "matic",
  //     "p3-IGmZPQrd-ri5AGlGm4cVm8k1uhCXx" // Should be replaced by env variable
  // );
  //
  // const provider = new EtherscanProvider("matic", "V7R1QM3PC1PVFP6GEJKRBI669HPKX9ZKIE")
  // console.log("provider", provider)
  if (typeof window != 'undefined' && typeof window?.ethereum != 'undefined') {
    // running on client and window + ethereum is avail
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    return new ethers.Contract(contractAddress, ERC20ABI, provider?.getSigner());
  } else {
    const provider = new ethers.providers.AlchemyProvider(
        "matic",
        "p3-IGmZPQrd-ri5AGlGm4cVm8k1uhCXx" // Should be replaced by env variable
    );
    return new ethers.Contract(contractAddress, ERC20ABI, provider);
  }
}

export function useDivaContract(): any {
  if (typeof window != 'undefined' && typeof window?.ethereum != 'undefined') {
    // running on client and window + ethereum is avail
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    return new ethers.Contract('0xFf7d52432B19521276962B67FFB432eCcA609148', DivaABI, provider?.getSigner());
  } else return null;
}
