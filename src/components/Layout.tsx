import React from "react";
import Navbar from "./Navbar";

type LayoutProps = {
  children: JSX.Element;
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-screen-xl">{children}</main>
    </>
  );
};

export default Layout;
