import { Typography } from "@mui/material";
import React from "react";
import Collaborator from "./Collaborator";
import FeatureImplement from "./FeatureImplement";
import TechnologyUsed from "./TechnologyUsed";
import Background from "../../Assets/Background/aboutProject.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box } from "@mui/system";

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
      <FeatureImplement></FeatureImplement>
      <Collaborator></Collaborator>
    </>
  );
};

export default AboutProject;
