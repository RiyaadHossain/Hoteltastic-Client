import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import CommonBg from "../Assets/Background/callToActionBg.png";
import HomeIcon from '@mui/icons-material/Home';

const useStyles = makeStyles((theme) => ({
  header: {
    background: `#c1edd4 url(${CommonBg}) center left`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "65px 0",
    flexDirection: 'column'
  },
}));

function CustomHeader({ children }) {
  const classes = useStyles();
  return (
    <Box className={classes.header}>
      <Typography sx={{ fontSize: 40, fontWeight: 500 }}>{children}</Typography>
      <Breadcrumbs separator="›" aria-label="breadcrumbs">
      <Link

        onClick={(event) => event.preventDefault()}
        underline="hover"
        color="primary"
        fontSize="inherit"
        href="/"
      >
        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        Home
      </Link>

        <Typography fontSize="inherit">{ children}</Typography>
    </Breadcrumbs>
    
    </Box>
  );
}

export default CustomHeader;
