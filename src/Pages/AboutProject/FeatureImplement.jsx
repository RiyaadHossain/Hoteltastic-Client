import { Box, Typography } from "@mui/material";
import React from "react";

const FeatureImplement = () => {
  return (
    <Box
      sx={{
        fontFamily: "'Rubik', sans-serif",
        padding: "4px 70px 30px 70px",
        color: "#000",
        width: "100%",
        margin: "40 auto",
      }}
    >
      <Typography
        sx={{
          fontWeight: "500",
          margin: "40px",
          fontFamily: "'Rubik', sans-serif",
          fontSize: {
            xs: "28px",
            sm: "30px",
            md: "34px",
            borderBottom: "",
          },
        }}
        fontWeight="bold"
      >
        Features
        <Box
          sx={{
            width: "25%",
            background:
              "linear-gradient(90deg, hsl(0, 0%, 70%), hsl(0, 0%, 20%), hsl(0, 0%, 70%))",
            height: "2px",
          }}
        ></Box>
      </Typography>
      <Box ml={5}>
        <Typography width={880} mb={4}>
          <span style={{ fontWeight: "bold", fontSize: 22 }}>Intro:</span>
          Hoteltastic is a hotel management site where user can visit and book
          any exsiting room after successfully log in. Also, admin can track their user authorities,
          add-update-delete any exsiting room. Moreover, admin can make any user
          admin even he can ban any user.
        </Typography>
        <Typography width={880} mb={4} display={'flex'} alignItems='start'>
          <span style={{ fontWeight: "bold", fontSize: 22,  }}>Features:</span>
          <ul style={{marginLeft: 35, marginTop: 5}}>
            <li>MVC Architechture Pattern</li>
            <li>JWT Based Authentication</li>
            <li>Role Based Authorization</li>
            <li>Admin & User Dashboard</li>
            <li>Multer: File Upload</li>
          </ul>
        </Typography>
      </Box>
    </Box>
  );
};

export default FeatureImplement;
