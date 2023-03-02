import React, {useEffect} from "react";
import NavBar from "./Navbar";
import { FooterSection } from "../Section/FooterSection";

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
    const [chainId, setChainId] = React.useState('0');
    const handleOpen = () => {
        window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: "0x89" }],
        });
    }
    useEffect(() => {
        if (window?.ethereum) {
            window.ethereum.on("chainChanged", (chainId) => {
                console.log(window.ethereum.chainId)
                setChainId(chainId);
            });
        }

    },[typeof window != 'undefined'])
  // console.log(window.ethereum.chainId)
  return (
    <>
      <div className="">
        <NavBar />
        {chainId === '0x89' ? children : (
<div className="flex flex-col items-center justify-center h-screen">
    <div className="flex flex-col items-center justify-center">
        Unsupported network, please <button onClick={handleOpen}>Switch</button>{' '}
        to Polygon network in your Metamask wallet.
    </div>
</div>
        )}
        <FooterSection />
      </div>
    </>
  );
};

export default Layout;
