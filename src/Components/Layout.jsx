import { CssBaseline } from "@mui/material";
import React from "react";
import MessengerCustomerChat from "react-messenger-customer-chat/lib/MessengerCustomerChat";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <CssBaseline />
      {children}
      <Footer />
      <MessengerCustomerChat
        pageId="108135362043823"
        appId="1249936149090301"
        themeColor={'#2dbe6c'}
      />
    </>
  );
}

export default Layout;
