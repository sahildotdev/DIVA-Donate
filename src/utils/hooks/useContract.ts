import { useMemo } from "react";
import { Contract, ethers } from "ethers";

import { DivaABI, ERC20ABI } from "../../abi";
import { getContract } from "../general";
import { useAccount } from "wagmi";

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
  contractAddress: string,
  withSignerIfPossible?: boolean
): any {
  return useContract(contractAddress, ERC20ABI, withSignerIfPossible);
}

export function useDivaContract(
  contractAddress: string,
  withSignerIfPossible?: boolean
): any {
  return useContract(contractAddress, DivaABI, withSignerIfPossible);
}
