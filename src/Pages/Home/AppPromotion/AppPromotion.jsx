import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Button, Grid, Typography } from "@mui/material";
import Mobile1 from "../../../Assets/Image/mobile-1.png";
import Mobile2 from "../../../Assets/Image/mobile-2.png";
import PromotionBG from "../../../Assets/Background/mobileBg.png";
import AppleIcon from "@mui/icons-material/Apple";
import ShopIcon from "@mui/icons-material/Shop";

const useStyles = makeStyles((theme) => ({
  root: {
    background: `#09a52bbd  url(${PromotionBG}) no-repeat`,
    // height: "600px",
    padding: "35px 40px",
  },
}));

function AppPromotion() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} alignItems="center">
      <Grid
        sx={{ display: { xs: "none", lg: "block" } }}
        item
        lg={6}
        alignSelf="flex-end"
        textAlign="center"
      >
        <Box overflow="hidden" sx={{ marginBottom: "-4.8%" }}>
          <img alt="" sx={{ overFlow: "hidden" }} src={Mobile1} />
          <img alt="" src={Mobile2} />
        </Box>
      </Grid>
      <Grid item lg={6} my={2}>
        <Box>
          <Typography
            variant="square"
            bgcolor="#f2b241"
            px={2}
            borderRadius
            fontWeight="bold"
            py={1}
          >
            Download
          </Typography>
          <Typography my={5} variant="h3" fontWeight="bold">
            Download Our Android and IOS App for Experience
          </Typography>
          <Button variant="contained">
            <AppleIcon fontSize="large" sx={{ mr: "10px" }} />
            <Typography variant="subtitle2" color="#ceced1" fontWeight="">
              Download <br />
              <Typography variant="subtitle1" fontWeight="bold" color="white">
                Apple Store
              </Typography>
            </Typography>
          </Button>
          <Button
            sx={{ marginLeft: { xs: 0, sm: "12px" }, mt: {xs: 2, sm: 0} }}
            variant="contained"
          >
            <ShopIcon fontSize="large" sx={{ mr: "10px" }} />
            <Typography variant="subtitle2" color="#ceced1">
              Download <br />
              <Typography variant="subtitle1" fontWeight="bold" color="white">
                Google Play
              </Typography>
            </Typography>
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default AppPromotion;
