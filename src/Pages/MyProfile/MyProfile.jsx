import { Box } from "@mui/system";
import React from "react";
import Background from "../../Assets/Background/myProfile.jpg";
import MyProfileHeader from "./MyProfileHeader";
import ProfileUpdateForm from "./ProfileUpdateForm";

const MyProfile = () => {
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          height: "20rem",
          backgroundPosition: "center",
          background: `#5b5b5b url(${Background}) no-repeat`,
          backgroundBlendMode: "overlay",
          backgroundSize: "cover",
          color: "#fff",
        }}
      ></Box>
      <MyProfileHeader></MyProfileHeader>
      <ProfileUpdateForm></ProfileUpdateForm>
    </Box>
  );
};

export default MyProfile;
