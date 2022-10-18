import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Background from "../../Assets/Background/aboutProject.png";
import Collaborator from "./Collaborator";
import FeatureImplement from "./FeatureImplement";
import TechnologyUsed from "./TechnologyUsed";

const AboutProject = () => {
  return (
    <>
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
              xs: "30px",
              sm: "34px",
              md: "44px",
            },
            marginBottom: "10px",
            fontWeight: 300,
          }}
        >
          About Our Project
          <Box className="dividerBox">
            <Box className="divider"></Box>
          </Box>
        </Typography>
      </Box>
      <TechnologyUsed></TechnologyUsed>
      <Collaborator></Collaborator>
      <FeatureImplement></FeatureImplement>
    </>
  );
};

export default AboutProject;
