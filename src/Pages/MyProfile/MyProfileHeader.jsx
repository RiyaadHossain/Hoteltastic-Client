import { Box } from "@mui/system";
import React from "react";

const MyProfileHeader = () => {
  return (
    <Box
      sx={{
        width: "90%",
        height: "40vh",
        mx: "auto",
        display: "flex",
      }}
    >
      <Box
        sx={{
          width: "40%",
          p: "20px",
        }}
      >
        <img
          style={{ width: "100%", borderRadius: "40%" }}
          src="http://azim.commonsupport.com/Realshed/assets/images/resource/testimonial-1.jpg"
          alt=""
        />
      </Box>
    </Box>
  );
};

export default MyProfileHeader;
