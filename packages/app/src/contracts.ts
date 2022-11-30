import CakedayNFTGoerli from "@web3-scaffold/contracts/deploys/goerli/CakedayNFT.json";
import { CakedayNFT__factory } from "@web3-scaffold/contracts/types";
import { useContractRead } from "wagmi";

import { provider, targetChainId } from "./EthereumProviders";

// I would have used `CakedayNFT__factory.connect` to create this, but we may
// not have a provider ready to go. Any interactions with this contract should
// use `cakedayNFTContract.connect(providerOrSigner)` first.

// export const cakedayNFTContract = new Contract(
//   CakedayNFTGoerli.deployedTo,
//   CakedayNFT__factory.abi
// ) as CakedayNFT;

export const cakedayNFTContract = CakedayNFT__factory.connect(
  CakedayNFTGoerli.deployedTo,
  provider({ chainId: targetChainId })
);

export const useCakedayNFTContractRead = (
  readConfig: Omit<
    Parameters<typeof useContractRead>[0],
    "addressOrName" | "contractInterface"
  >
) =>
  useContractRead({
    ...readConfig,
    addressOrName: CakedayNFTGoerli.deployedTo,
    contractInterface: CakedayNFT__factory.abi,
  });
