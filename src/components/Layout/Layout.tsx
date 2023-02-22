import React from "react";
import NavBar from "./Navbar";
import { FooterSection } from "./FooterSection";

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
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
