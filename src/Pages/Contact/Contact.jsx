import { Box, Typography } from "@mui/material";
import React from "react";
import ContactForm from "./ContactForm";
import GetInTouch from "./GetInTouch";
import Background from "../../Assets/Background/contactHeader.jpg";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import NewsLetter from "./NewsLetter";

const Contact = () => {
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          height: "20rem",
          padding: "130px 0px 130px 0px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          background: `#5b5b5b url(${Background}) no-repeat`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundBlendMode: "overlay",
          color: "#fff",
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: "28px",
              sm: "30px",
              md: "40px",
            },
            marginBottom: "10px",
            fontWeight: 800,
          }}
        >
          Contact Us
        </Typography>
        <Typography
          sx={{
            display: " flex",
            alignItems: "center",
            fontSize: {
              xs: "18px",
              sm: "20px",
              md: "24px",
            },
            color: "#ffffff",
            fontWeight: 500,
          }}
        >
          Home
          <ChevronRightIcon
            sx={{
              fontSize: {
                xs: "18px",
                sm: "20px",
                md: "24px",
              },
              mx: 1,

              fontWeight: 500,
            }}
          />
          <Typography
            component="span"
            sx={{
              fontSize: {
                xs: "18px",
                sm: "20px",
                md: "24px",
              },
              color: "#ffffff",
              fontWeight: 500,
            }}
          >
            Contact Us
          </Typography>
        </Typography>
      </Box>
      <GetInTouch></GetInTouch>
      <ContactForm></ContactForm>
      <NewsLetter></NewsLetter>
    </Box>
  );
};

export default Contact;
