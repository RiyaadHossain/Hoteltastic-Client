import { Box, Typography } from "@mui/material";
import React from "react";

const TechnologyUsed = () => {
  return (
    <>
      <Box
        sx={{
          fontFamily: "'Rubik', sans-serif",
          padding: "64px 70px 63px 70px",
          color: "#000",
          width: "90%",
          margin: "0 auto",
        }}
      >
        <Typography
          sx={{
            fontWeight: "500",
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
          Used Technology
          <Box
            sx={{
              width: "25%",
              background:
                "linear-gradient(90deg, hsl(0, 0%, 70%), hsl(0, 0%, 20%), hsl(0, 0%, 70%))",
              height: "2px",
            }}
          ></Box>
        </Typography>
        <Box>
            
        </Box>
      </Box>
    </>
  );
};

export default TechnologyUsed;
