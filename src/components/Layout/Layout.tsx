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
            setChainId(window.ethereum.chainId);
            window.ethereum.on("chainChanged", (chainId) => {
                setChainId(chainId);
            });
        }

    },[typeof window != 'undefined'])
  // console.log(window.ethereum.chainId)
  return (
    <>
      <div className="">
        <NavBar />
        {children}
        <FooterSection />
      </div>
    </>
  );
};

export default Layout;
