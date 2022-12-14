import { Box, Typography } from "@mui/material";
import React from "react";
import Technology from "./Technology";

const TechnologyUsed = () => {
  return (
    <>
      <Box
        sx={{
          fontFamily: "'Rubik', sans-serif",
          padding: "64px 70px 30px 70px",
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
          Technology
          <Box
            sx={{
              width: "25%",
              background:
                "linear-gradient(90deg, hsl(0, 0%, 70%), hsl(0, 0%, 20%), hsl(0, 0%, 70%))",
              height: "2px",
            }}
          ></Box>
        </Typography>
        <Technology></Technology>
      </Box>
    </>
  );
};

export default TechnologyUsed;
