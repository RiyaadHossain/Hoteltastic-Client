import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import BannerImg from "../../Assets/Image/banner-1.jpg"

const useStyles = makeStyles((theme) => ({
  root: {
    height: `calc(70vh)`,
    background: `#1e1e1a url(${BannerImg}) no-repeat bottom center`,
    backgroundSize: 'cover',
    backgroundBlendMode: 'overlay'
  },
}));

function Home() {
  const classes = useStyles();

  return <Box className={classes.root}>Home</Box>;
}

export default Home;
