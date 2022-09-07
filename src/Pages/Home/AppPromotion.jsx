import React from "react";
import PromotionBG from "../../Assets/Backgrounds/mobileBg.png";
import { Grid, makeStyles } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: PromotionBG,
  },
}));

function AppPromotion() {
  const classes = useStyles();

  return <Grid container className={classes.root}></Grid>;
}

export default AppPromotion;
