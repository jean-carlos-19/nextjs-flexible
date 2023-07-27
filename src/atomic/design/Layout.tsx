import React from "react";
import { NavBar, Footer } from "@/atomic/component";
const Layout = ({ children }: any) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export { Layout };
