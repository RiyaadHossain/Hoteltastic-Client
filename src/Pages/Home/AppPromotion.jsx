import React from "react";
import PromotionBG from "../../Assets/Background/mobileBg.png";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: PromotionBG,
    minHeight: '50vh',
    backgroundColor: "darkblue"
  },
}));

function AppPromotion() {
  const classes = useStyles();

  return <Grid container className={classes.root}></Grid>;
}

export default AppPromotion;
