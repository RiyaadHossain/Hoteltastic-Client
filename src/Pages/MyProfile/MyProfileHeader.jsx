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
          p: "20px",
          mt: "-100px",
        }}
      >
        <img
          style={{
            width: "200px",
            height: "200px",
            padding: "5px",
            background: "#fff",
            borderRadius: "50%",
            boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
          }}
          src="https://i.ibb.co/TtcvWfH/profile-Photo.jpg"
          alt=""
        />
      </Box>
    </Box>
  );
};

export default MyProfileHeader;
