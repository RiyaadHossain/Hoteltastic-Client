import { Box } from "@mui/material";
import React from "react";
import NotFoundImage from "../../Assets/Background/notFound.gif";

const NotFound = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        fontFamily: "'Rubik', sans-serif",
        // padding: "80px 0px 0px 0px",
        width: "100%",
        minHeight: "100vh",
        background: ` url(${NotFoundImage}) no-repeat center center`,
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    ></Box>
  );
};

export default NotFound;
