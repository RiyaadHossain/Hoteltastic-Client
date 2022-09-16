import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import CommonBg from "../Assets/Background/callToActionBg.png";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import BedroomChildIcon from "@mui/icons-material/BedroomChild";

const useStyles = makeStyles((theme) => ({
  header: {
    background: `#c1edd4 url(${CommonBg}) center left`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "65px 0",
    flexDirection: "column",
  },
}));

function CustomHeader({ children, nested }) {
  const navigate = useNavigate();

  const classes = useStyles();
  return (
    <Box className={classes.header}>
      <Typography sx={{ fontSize: 40, fontWeight: 500 }}>{children}</Typography>
      <Breadcrumbs separator="›" aria-label="breadcrumbs">
        <Link
          onClick={() => navigate("/")}
          underline="hover"
          color="primary"
          fontSize="inherit"
          display="flex"
          alignItems="center"
          sx={{cursor: 'pointer'}}
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Home
        </Link>
        {nested && (
          <Link
            onClick={() => navigate("/allRooms")}
            underline="hover"
            color="primary"
            fontSize="inherit"
            display="flex"
            alignItems="center"
            sx={{cursor: 'pointer'}}
          >
            <BedroomChildIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            All Rooms
          </Link>
        )}

        <Typography fontSize="inherit">{children}</Typography>
      </Breadcrumbs>
    </Box>
  );
}

export default CustomHeader;
