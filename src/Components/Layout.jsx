import { CssBaseline } from "@mui/material";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <CssBaseline/>
      {children}
      <Footer/>
    </>
  );
}

export default Layout;
