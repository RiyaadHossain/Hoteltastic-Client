import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import CommonBg from "../Assets/Background/callToActionBg.png";

const useStyles = makeStyles((theme) => ({
  header: {
    background: `#c1edd4 url(${CommonBg}) center left`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "65px 0",
  },
}));

function CustomHeader({ children }) {
  const classes = useStyles();
  return (
    <Box className={classes.header}>
      <Typography sx={{ fontSize: 40, fontWeight: 500 }}>{children}</Typography>
    </Box>
  );
}

export default CustomHeader;
