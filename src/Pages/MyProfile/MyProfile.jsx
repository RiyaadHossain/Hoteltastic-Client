import { Box } from "@mui/system";
import React from "react";
import Background from "../../Assets/Background/myProfile.jpg";
import MyProfileHeader from "./MyProfileHeader";

const MyProfile = () => {
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
      ></Box>
      <MyProfileHeader></MyProfileHeader>
    </Box>
  );
};

export default MyProfile;